import React, { useState } from 'react'
import './AddNewVehicles.css'
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../../API/vehicles.api';

export const AddNewVehicles = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      vehicle_Registration_No: "",
      ch_Id: "",
      kms: 0,
      hrs: 11,
      reporting_Date:'',
      customer_Name: "",
      status:'',
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
  const [error, setError] = useState({ VregsError: false });
 
  const handleFormValue =(e) => {
    const name = e.target.name;
    let value = e.target.value;

   setFormData((prev) => ({
      ...prev,[name]:value
    }))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (formData.vehicle_Registration_No != '' && formData.customer_Name != '') {
      
    try {
      const existingData = await api.get(`/vehicle/${formData.vehicle_Registration_No}`);
      if (existingData) {
        // If existing data found, prompt the user or handle accordingly
        alert('Vehicle with this registration number already exists!');
        setError({VregsError:true})
        return;
      }
      } catch (error) {
        console.error('Error fetching existing data:', error);
      }
      setError({VregsError:false})
      //if not existing then post it
      try {
        await api.post('/vehiclespost/', formData);
        console.log(JSON.stringify(formData))
        navigate(`/addvehicledetails/${formData.vehicle_Registration_No}`)
      } catch (error) {
        console.error("error submitting form",error)
      }
    } else {
      alert('Fill up all details')
    }
  }
  return (
    <div className='container-add'>
          <div className='heading-'>
            <NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
            </NavLink>
              <h2>Add new Vehicles</h2>
          </div>
          <div className='vehicle-form'>
            <form onSubmit={handleSubmit}>

                <div className='input-group'>
                  <label htmlFor='vehicle_Registration_No'>Vehicle Registration No.</label>
                  <input type='text' name='vehicle_Registration_No' style={{border:error.VregsError?'2px solid red':'2px solid green'}} onChange={handleFormValue} value={formData.vehicle_Registration_No}  className='input'/>
                </div>
                <div className='input-group'>
                  <label htmlFor='ch_Id'>CH ID</label>
                  <input type='text' name='ch_Id' onChange={handleFormValue} value={formData.ch_Id}   className='input'/>
                </div>


            <div className='input-group'>
                <label htmlFor='customer_Name'>Customer Name</label>
                <select type='text' name='customer_Name' onChange={handleFormValue} value={formData.customer_Name}  className='input'>
                  <option value=''>none</option>
                  <option value="Delhivery Pvt. Ltd.">Delhivery Pvt. Ltd.</option>
                  <option value="Nutan Rajumani Transport">Nutan Rajumani Transport</option>
                  <option value="ARL Express Logistics Pvt. Ltd">ARL Express Logistics Pvt. Ltd</option>
                  <option value="Dhir E Logistics">Dhir E Logistics</option>
                  <option value="New Shree Bombay Transport Carriers">New Shree Bombay Transport Carriers</option>
                </select>
              </div>
              <div className='input-group'>
                <label htmlFor='reporting_Date'>Reporting Date</label>
                <input type='date' name='reporting_Date' onChange={handleFormValue} value={formData.reporting_Date}  className='input'/>
              </div>

            <div className='input-group'>
                <label htmlFor='hrs'>Engine Hrs</label>
                <input type='text' name='hrs' onChange={handleFormValue} value={formData.hrs}  className='input'/>
              </div>
              <div className='input-group'>
                <label htmlFor='kms'>KMS</label>
                <input type='number' name='kms' onChange={handleFormValue} value={formData.kms} className='input'/>
              </div>
            <br/>
            <div className='input-group right-next-btn'>
              <button type='submit' className='submit-btn'>Next</button>
            </div>
            </form>
          </div>
    </div>
  )
}
