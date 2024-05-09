from typing import List
from bson import ObjectId


# class VehicleModel(BaseModel):
#     _id: ObjectId
#     vehicle_Registration_No: str
#     ch_Id: str
#     kms: int
#     hrs: float
#     reporting_Date: str
#     customer_Name: str
#     primary_Quotation_Submitted_to_Surveyor: Optional[PrimaryQuotation] = None
#     Insurance_Surveyor_visiting_to_Workshop: Optional[InsuranceSurveyor] = None
#     Customer_Approval_Received_From_Insurance: Optional[CustomerApproval] = None
#     Dismantling_Work_Started: Optional[DismentallingWorkStart] = None
#     Dismantling_Work_Completed: Optional[DismentallingWorkEnd] = None
#     Secondary_Estimation_Shared: Optional[SecondaryEstimation] = None
#     Customer_Approval_Received_From_Insurance_After: Optional[CustomerApprovalAfterSecondary] = None
#     Parts_Ordering_Date: Optional[PartsOrdering] = None
#     Last_Part_ETA: Optional[LastPartETA] = None
#     Day_Wise_Update: Optional[List[DayWiseUpdate]] = None

# def individual_serial_vehicle(vehicle) -> dict:
#     return {
#         "id": str(vehicle["_id"]),
#         "vehicle_Registration_No": vehicle["vehicle_Registration_No"],
#         "ch_Id": vehicle["ch_Id"],
#         "kms": vehicle["kms"],
#         "hrs": vehicle["hrs"],
#         "reporting_Date": vehicle["reporting_Date"],
#         "customer_Name": vehicle["customer_Name"],
#         "Primary_Quotation_Submitted_to_Surveyor": vehicle["Primary_Quotation_Submitted_to_Surveyor"],
#         "Insurance_Surveyor_visiting_to_Workshop": vehicle["Insurance_Surveyor_visiting_to_Workshop"],
#         "Customer_Approval_Received_From_Insurance":vehicle["Customer_Approval_Received_From_Insurance"],
#         "Dismantling_Work_Started":vehicle["Dismantling_Work_Started"],
#         "Dismantling_Work_Completed":vehicle["Dismantling_Work_Completed"],
#         "Secondary_Estimation_Shared":vehicle["Secondary_Estimation_Shared"],
#         "Customer_Approval_Received_From_Insurance_After":vehicle["Customer_Approval_Received_From_Insurance_After"],
#         "Parts_Ordering_Date":vehicle["Parts_Ordering_Date"],
#         "Last_Part_ETA": vehicle["Last_Part_ETA"],
#         "Day_Wise_Update":vehicle["Day_Wise_Update"]

#     }

# def list_serial_vehicle(vehicles) -> List[dict]:
#     return [individual_serial_vehicle(vehicle) for vehicle in vehicles]

# Define individual_serial methods for sub-models (e.g., PrimaryQuotation, InsuranceSurveyor, etc.) similarly.




# trying
def individual_serial_vehicle(vehicle) -> dict:
    return {
        "id": str(vehicle.get("_id")),
        "vehicle_Registration_No": vehicle.get("vehicle_Registration_No"),
        "ch_Id": vehicle.get("ch_Id"),
        "kms": vehicle.get("kms"),
        "hrs": vehicle.get("hrs"),
        "reporting_Date": vehicle.get("reporting_Date"),
        "customer_Name": vehicle.get("customer_Name"),
        "status":vehicle.get("status"),
        "Primary_Quotation_Submitted_to_Surveyor": vehicle.get("Primary_Quotation_Submitted_to_Surveyor"),
        "Insurance_Surveyor_Visiting_to_Workshop": vehicle.get("Insurance_Surveyor_Visiting_to_Workshop"),
        "Customer_Approval_Received_From_Insurance": vehicle.get("Customer_Approval_Received_From_Insurance"),
        "Dismantling_Work_Started": vehicle.get("Dismantling_Work_Started"),
        "Dismantling_Work_Completed": vehicle.get("Dismantling_Work_Completed"),
        "Secondary_Estimation_Shared": vehicle.get("Secondary_Estimation_Shared"),
        "Customer_Approval_Received_From_Insurance_After": vehicle.get("Customer_Approval_Received_From_Insurance_After"),
        "Parts_Ordering_Date": vehicle.get("Parts_Ordering_Date"),
        "Last_Part_ETA": vehicle.get("Last_Part_ETA"),
        "Day_Wise_Update": vehicle.get("Day_Wise_Update")
    }

def list_serial_vehicle(vehicles) -> List[dict]:
    return [individual_serial_vehicle(vehicle) for vehicle in vehicles]
