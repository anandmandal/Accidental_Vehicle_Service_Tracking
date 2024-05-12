from fastapi import APIRouter,File, UploadFile,HTTPException,Form
from typing import List,Annotated
from models.model import VehicleModel,PrimaryQuotation,InsuranceSurveyor,CustomerApproval,DismentallingWorkStart,DismentallingWorkEnd,SecondaryEstimation,CustomerApprovalAfterSecondary,PartsOrdering,LastPartETA,DayWiseUpdate,VehicleDetails
from schema.schemas import list_serial_vehicle
from config.database import collection_name
from typing import Dict
from operator import itemgetter
from datetime import datetime


router=APIRouter()

# GET ALL VEHICLES
@router.get("/vehicles/")
async def get_all_vehicles():
    vehicles=list_serial_vehicle(collection_name.find())
    return vehicles



# GET PARTICULAR VEHICLES DETRAILS

@router.get("/vehicle/{registration_no}")
async def get_vehicle_details(registration_no: str):
    # Query the database to find the vehicle with the given registration number
    vehicle = collection_name.find_one({"vehicle_Registration_No": registration_no})

    if vehicle:
        # If vehicle found, convert it to a dictionary and exclude the _id field
        vehicle_dict = dict(vehicle)
        vehicle_dict.pop('_id', None)
        return vehicle_dict
    else:
        # If vehicle not found, raise HTTPException with 404 status code
        raise HTTPException(status_code=404, detail="Vehicle not found")




# Add a new vehicle
@router.post("/vehiclespost/")
async def add_vehicle(vehicle: VehicleModel):
    try:
        # validation for existing vehicles
        existing_vehicle = collection_name.find_one({"vehicle_Registration_No": vehicle.vehicle_Registration_No})
        if existing_vehicle:
            raise HTTPException(status_code=400, detail="Vehicle with this registration number already exists")

        # Convert the vehicle model to a dictionary
        vehicle_dict = vehicle.dict()

        # NOW INSERT THE ALL DATA IN DB
        result = collection_name.insert_one(vehicle_dict)

        # Check if insertion was successful
        if result.inserted_id:
            return {"message": "Vehicle added successfully", "vehicle_id": str(result.inserted_id)}
        else:
            raise HTTPException(status_code=500, detail="Failed to add vehicle")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# POST/ ADD NEW VEHICLE with file
# @router.post("/vehicles/")
# async def add_vehicle(vehicle: VehicleModel, 
#                       primary_quotation_file: UploadFile = File(None), 
#                       insurance_surveyor_file: UploadFile = File(None),
#                       dismantling_work_end_file: UploadFile = File(None),
#                       parts_ordering_file: UploadFile = File(None)):
#     try:
#         # Convert the vehicle model to a dictionary
#         vehicle_dict = vehicle.dict()

#         # Attach file data to corresponding model fields
#         if primary_quotation_file:
#             vehicle_dict["Primary_Quotation_Submitted_to_Surveyor"]["upload_File"] = primary_quotation_file.filename  if primary_quotation_file else None
#         if insurance_surveyor_file:
#             vehicle_dict["Insurance_Surveyor_Visiting_to_Workshop"]["upload_File"] = insurance_surveyor_file.filename  if insurance_surveyor_file else None
#         if dismantling_work_end_file:
#             vehicle_dict["Dismantling_Work_Completed"]["upload_File"] = dismantling_work_end_file.filename if dismantling_work_end_file else None
#         if parts_ordering_file:
#             vehicle_dict["Parts_Ordering_Date"]["upload_File"] = parts_ordering_file.filename  if parts_ordering_file else None

#         # NOW INSERT THE ALL DATA IN DB
#         result = collection_name.insert_one(vehicle_dict)

#         # Check if insertion was successful
#         if result.inserted_id:
#             return {"message": "Vehicle added successfully", "vehicle_id": str(result.inserted_id)}
#         else:
#             raise HTTPException(status_code=500, detail="Failed to add vehicle")
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))




#GET ONLY DAY WISE UPDATE
@router.get("/vehicles/{vehicle_registration_no}/daywiseupdate")
async def get_daywise_update(vehicle_registration_no: str):
    try:
        # Find the document with the provided registration number
        vehicle = collection_name.find_one({"vehicle_Registration_No": vehicle_registration_no})
        if vehicle:
            day_wise_update = vehicle.get("Day_Wise_Update", [])
            # Sort the day-wise updates by date
            sorted_day_wise_update = sorted(day_wise_update, key=itemgetter('date'))
            return sorted_day_wise_update
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

        # Check if the update was successful
        if result.modified_count == 1:
            return {"message": "Daywise update added successfully"}
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))




# PUT OR PUSHING DAY WISE UPDATE
@router.put("/vehicles/{vehicle_registration_no}/daywiseupdate")
async def update_daywise_update(vehicle_registration_no: str, daywise_update_dict: DayWiseUpdate):
    try:
        DW=daywise_update_dict.dict()
        # Find the document with the given vehicle registration number
        result = collection_name.update_one(
            {"vehicle_Registration_No": vehicle_registration_no},
            {"$push": {"Day_Wise_Update": DW}}
        )

        # Check if the update was successful
        if result.modified_count == 1:
            return {"message": "Daywise update added successfully"}
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



#DELETE A PARTICULAR DAY
@router.delete("/vehicles/{vehicle_registration_no}/daywiseupdate")
async def delete_daywise_update(vehicle_registration_no: str, work_details: str):
    try:
        # Find the document with the provided registration number
        vehicle = collection_name.find_one({"vehicle_Registration_No": vehicle_registration_no})
        if vehicle:
            day_wise_update = vehicle.get("Day_Wise_Update", [])
            # Filter out the day-wise update with the given work_details
            updated_day_wise_update = [update for update in day_wise_update if update.get('work_Details') != work_details]
            # Update the document with the filtered day-wise updates
            result = collection_name.update_one(
                {"vehicle_Registration_No": vehicle_registration_no},
                {"$set": {"Day_Wise_Update": updated_day_wise_update}}
            )
            # Check if any document was modified
            if result.modified_count > 0:
                return {"message": "Day-wise update deleted successfully"}
            else:
                raise HTTPException(status_code=404, detail="Day-wise update not found")
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))




# updating a particular index of daywise work
@router.put("/vehicles/{vehicle_registration_no}/daywise/{update_id}")
async def update_daywise(vehicle_registration_no: str,
                         update_id: int,
                         daywise_update: DayWiseUpdate):
    try:
        # Convert the DayWiseUpdate model to a dictionary
        daywise_update_dict = daywise_update.dict()

        # Perform the update operation in MongoDB
        result = collection_name.update_one(
            {"vehicle_Registration_No": vehicle_registration_no},
            {"$set": {f"Day_Wise_Update.{update_id}": daywise_update_dict}}
        )

        # Check if the update was successful
        if result.modified_count > 0:
            return {"message": "Daywise update updated successfully", "update_id": update_id}
        else:
            raise HTTPException(status_code=404, detail="Daywise update not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))





# Update existing vehicle
@router.put("/vehicles/{vehicle_registration_no}/update")
async def update_vehicle(vehicle_registration_no: str, update_data: VehicleModel):
    update_dict = update_data.dict()

    try:
        # Convert nested fields to dicts
        update_dict = {
            **update_dict,
            "Primary_Quotation_Submitted_to_Surveyor": update_data.Primary_Quotation_Submitted_to_Surveyor.dict(),
            "Insurance_Surveyor_Visiting_to_Workshop": update_data.Insurance_Surveyor_Visiting_to_Workshop.dict(),
            "Customer_Approval_Received_From_Insurance": update_data.Customer_Approval_Received_From_Insurance.dict(),
            "Dismantling_Work_Started": update_data.Dismantling_Work_Started.dict(),
            "Dismantling_Work_Completed": update_data.Dismantling_Work_Completed.dict(),
            "Secondary_Estimation_Shared": update_data.Secondary_Estimation_Shared.dict(),
            "Customer_Approval_Received_From_Insurance_After": update_data.Customer_Approval_Received_From_Insurance_After.dict(),
            "Parts_Ordering_Date": update_data.Parts_Ordering_Date.dict(),
            "Last_Part_ETA": update_data.Last_Part_ETA.dict()
        }

        # Find the document with the provided registration number
        result = collection_name.update_one(
            {"vehicle_Registration_No": vehicle_registration_no},
            {"$set": update_dict}
        )

        # Check if any document was modified
        if result.modified_count > 0:
            return {"message": "Vehicle updated successfully"}
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


#DELETE VEHICLE
@router.delete("/vehicles/{vehicle_registration_no}/delete")
async def delete_vehicle(vehicle_registration_no: str):
    try:
        # Check if the vehicle with the provided registration number exists
        result = collection_name.delete_one({"vehicle_Registration_No": vehicle_registration_no})
        
        # Check if any document was deleted
        if result.deleted_count > 0:
            return {"message": "Vehicle deleted successfully"}
        else:
            raise HTTPException(status_code=404, detail="Vehicle not found")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Endpoint to update the status of a document
@router.put("/update-status/{registration_no}")
async def update_status(registration_no: str, new_status: str):
    try:
        # Query for the document by registration number
        document = collection_name.find_one({"vehicle_Registration_No": registration_no})
        if document:
            # Update the status field
            collection_name.update_one({"_id": document["_id"]}, {"$set": {"status": new_status}})
            return {"message": f"Status updated for document with registration number {registration_no}"}
        else:
            raise HTTPException(status_code=404, detail="Document not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail="Database error")
  