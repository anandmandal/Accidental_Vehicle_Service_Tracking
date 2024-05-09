from pydantic import BaseModel, Field
from typing import Optional, List
from fastapi import UploadFile,File

class PrimaryQuotation(BaseModel):
    date: Optional[str] = None
    time: Optional[str] = None
    quotation_No: Optional[str] = None
    price: Optional[float] = None
    # upload_File:UploadFile=File(None)

class InsuranceSurveyor(BaseModel):
    date: Optional[str] = None
    # upload_File: UploadFile=File(None)

class CustomerApproval(BaseModel):
    date: Optional[str] = None

class DismentallingWorkStart(BaseModel):
    date: Optional[str] = None

class DismentallingWorkEnd(BaseModel):
    date: Optional[str] = None
    # upload_File: UploadFile=File(None)

class SecondaryEstimation(BaseModel):
    date: Optional[str] = None

class CustomerApprovalAfterSecondary(BaseModel):
    date: Optional[str] = None

class PartsOrdering(BaseModel):
    date: Optional[str] = None
    # upload_File: UploadFile=File(None)

class LastPartETA(BaseModel):
    date: Optional[str] = None
    tentive_Time: Optional[str] = None

class DayWiseUpdate(BaseModel):
    date: Optional[str] = None
    work_Details: Optional[str] = None

class VehicleModel(BaseModel):
    vehicle_Registration_No: str
    ch_Id: str
    kms: int
    hrs: float
    reporting_Date: str
    customer_Name: str
    status:str
    Primary_Quotation_Submitted_to_Surveyor:PrimaryQuotation
    Insurance_Surveyor_Visiting_to_Workshop:InsuranceSurveyor
    Customer_Approval_Received_From_Insurance:CustomerApproval
    Dismantling_Work_Started:DismentallingWorkStart
    Dismantling_Work_Completed:DismentallingWorkEnd
    Secondary_Estimation_Shared:SecondaryEstimation
    Customer_Approval_Received_From_Insurance_After:CustomerApprovalAfterSecondary
    Parts_Ordering_Date:PartsOrdering
    Last_Part_ETA:LastPartETA
    Day_Wise_Update:List[DayWiseUpdate]


    # testing purpose
    
class VehicleDetails(BaseModel):
    vehicle_Registration_No: str
    ch_Id: str
    kms: int
    hrs: float
    reporting_Date: str
    customer_Name: str
    Day_Wise_Update:List[DayWiseUpdate]
