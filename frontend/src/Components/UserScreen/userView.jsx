import React, { useEffect, useState } from 'react'
import { LabelValueBox } from './keyValue'
import './userScreen.css'
import { MdCalendarToday, MdPictureAsPdf, MdShare } from 'react-icons/md'
import api from '../../API/vehicles.api'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Popup from './popup'


export const UserView = ({id}) => {
    const [isPopOpen, setIsPopOpen] = useState(false);

    const openPopup = () => {
      setIsPopOpen(true);
    };
  
    const closePopup = () => {
        setIsPopOpen(false);
    };
    const [vehicles, setVehicles] = useState({vehicle_Registration_No: "",
  ch_Id: "",
  kms: 0,
  hrs: 11,
  reporting_Date:'',
  customer_Name: "",
  Primary_Quotation_Submitted_to_Surveyor: {
    date: "",
    time: "",
    quotation_No: "",
    price: 0
  },
  Insurance_Surveyor_Visiting_to_Workshop: {
    date: ""
  },
  Customer_Approval_Received_From_Insurance: {
    date: ""
  },
  Dismantling_Work_Started: {
    date: ""
  },
  Dismantling_Work_Completed: {
    date:""
  },
  Secondary_Estimation_Shared: {
    date: ""
  },
  Customer_Approval_Received_From_Insurance_After: {
    date: ""
  },
  Parts_Ordering_Date: {
    date: ""
  },
  Last_Part_ETA: {
    date: "",
    tentive_Time: ""
  },
  Day_Wise_Update: [
    {
      date: "",
      work_Details: ""
    }
  ]

});
  
  useEffect(() => {
    fetchVehicle();
  },[])
  
  const fetchVehicle = async () => {
    try {
      const response = await api.get(`/vehicle/${id}`);
      setVehicles(response.data)
    } catch (error) {
      console.error('error fetching data at home', error)
    }
    console.log(JSON.stringify(vehicles))
    }
    const oddStyle = {
        backgroundColor: '#191970ac',
        color:'#fff'
    }
    const evenStyle = {
        backgroundColor: '#b3cee5',
        color:'#000'
    }
    const [isOpen, setIsOpen] = useState(false);
    const handleAccordian = () => {
        setIsOpen(!isOpen);
    }
const shareLink=`http://localhost:5173/customerview/${id}`
  return (
    <>
        <button className='share-btn' onClick={openPopup}><MdShare/></button>
      <Popup isOpen={isPopOpen} onClose={closePopup} shareLink={shareLink}>
      <div className='model'>
                           <div className='header'>
              <h3>Your Vehicle Details</h3>
              <hr></hr>
          </div>
          <div className='Vehicles-Details'>
        <div className='key-values'>
          <LabelValueBox label='Registration No' value={vehicles.vehicle_Registration_No} />
          <LabelValueBox label='Name of Owner' value={vehicles.customer_Name} />
          <LabelValueBox label='Ch Id' value={vehicles.ch_Id} />
          <LabelValueBox label='Kms' value={vehicles.kms} />
          <LabelValueBox label='Hrs' value={vehicles.hrs} />
          <LabelValueBox label='Date of Reporting' value={vehicles.reporting_Date} />
        </div>
        <div className='accordian-div'></div>
              <div className='accordian-summary'>
                  <h4>See More Details</h4>
                  <button onClick={handleAccordian}>{ isOpen?<FaAngleUp/>:<FaAngleDown/>}</button>
              </div>
              <div className='details' style={{display:isOpen?'':'none'}}>
                      <fieldset>
                          <legend style={{fontSize:'12px'}}><strong>Primary Quotation Details</strong></legend>
                          <LabelValueBox label='Date' value={vehicles.Primary_Quotation_Submitted_to_Surveyor.date} />
          <LabelValueBox label='Quotation No' value={vehicles.Primary_Quotation_Submitted_to_Surveyor.quotation_No} />
          <LabelValueBox label='Time' value={vehicles.Primary_Quotation_Submitted_to_Surveyor.time} />
          <LabelValueBox label='Price' value={vehicles.Primary_Quotation_Submitted_to_Surveyor.price} />
         <button className=''><MdPictureAsPdf/> <a href=''>click here to download bill</a></button>
                     </fieldset>
                     <fieldset>
                          <legend align='right' style={{fontSize:'12px',}}><strong>Insurance Surveyor Visiting to Workshop</strong></legend>
                          <LabelValueBox label='Date' value={vehicles.Primary_Quotation_Submitted_to_Surveyor.date} />
         <button className=''><MdPictureAsPdf/><a href=''>click here to download bill</a></button>
                  </fieldset> 
                  <fieldset>
                          <legend  style={{fontSize:'12px',}}><strong>Customer Approval Received from Insurance</strong></legend>
                          <LabelValueBox label='Date' value={vehicles.Customer_Approval_Received_From_Insurance.date} />
                  </fieldset> 
                  <fieldset>
                          <legend align='right' style={{fontSize:'12px',}}><strong>Dismanting Work </strong></legend>
                      <LabelValueBox label=' Started Date' value={vehicles.Dismantling_Work_Started.date} />
                      <LabelValueBox label='Completion Date' value={vehicles.Dismantling_Work_Completed.date} />
                      <button className=''><MdPictureAsPdf/><a href=''>click here to download bill</a></button>
                  </fieldset> 
                  <fieldset>
                    
                          <legend  style={{fontSize:'12px',}}><strong>Secondary Estemation Shared</strong></legend>
                          <LabelValueBox label=' Date' value={vehicles.Secondary_Estimation_Shared.date} />
         <button className=''><MdPictureAsPdf/><a href=''>click here to download bill</a></button>
                  </fieldset>

                  <fieldset>
                          <legend align='right' style={{fontSize:'12px',}}><strong>Customer Approval Received from Insurance</strong></legend>
                          <LabelValueBox label='Date' value={vehicles.Customer_Approval_Received_From_Insurance_After.date} />
                  </fieldset> 
                  <fieldset>
                          <legend  style={{fontSize:'12px',}}><strong>Parts Details </strong></legend>
                      <LabelValueBox label='Date' value={vehicles.Parts_Ordering_Date.date} />
                      <button className=''><MdPictureAsPdf/><a href=''>click here to download bill</a></button>
                  </fieldset> 
                  <fieldset>
                    
                          <legend align='right' style={{fontSize:'12px',}}><strong>Last Part ETA</strong></legend>
                          <LabelValueBox label=' Date' value={vehicles.Last_Part_ETA.date} />
                          <LabelValueBox label='Time' value={vehicles.Last_Part_ETA.tentive_Time} />
                  </fieldset>
                  </div>
              
          </div>
          <div className='header'>
              <h3>Work update</h3>
              <hr></hr>
          </div>
          <div className='work-details'>
              {
                  (vehicles.Day_Wise_Update.length <= 1) ? 'There is no work updated until now, check again after some time' : (
                      
                      vehicles.Day_Wise_Update.map((item, index) => (
                        (index>=1)?(<div className='day-one' key={index}>
                  
                        <div className='message1'>
                            <div className='circle'>{index}</div>
                            <div className='date-details' style={index%2==0?evenStyle:oddStyle}>
                                <h5 > <MdCalendarToday/>  {item.date}</h5>
                                <p>{item.work_Details}</p>
                            </div>
                        </div>
                        <div className='verticle'/>
                </div>):''
                    ))
                  )
              }
          </div>
        </div>
      </Popup>
    
    </>
  )
}
