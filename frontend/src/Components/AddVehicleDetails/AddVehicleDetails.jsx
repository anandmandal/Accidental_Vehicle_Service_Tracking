import React, { useEffect, useState } from 'react'
import './AddVehiclesDetails.css'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FaFilePdf } from 'react-icons/fa'
import api from '../../API/vehicles.api'
import axios from 'axios'
import { UserView } from '../UserScreen/userView'

export const AddVehicleDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState({vehicle_Registration_No: "",
  ch_Id: "",
  kms: 0,
  hrs: 0,
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
  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setVehicles({ ...vehicles, [name]: value })
  //   console.log(name,value)
  // }
 
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    // If the name contains dots (indicating nested object), split the name
    // and update the nested object
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setVehicles(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      // If not nested, update directly
      setVehicles(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    console.log(JSON.stringify(vehicles))
  };
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await api.put(`/vehicles/${id}/update`,vehicles);
      if (response.data.message) {
        alert(response.data.message);
        navigate(`/daywiseupdate/${id}`)
      } else {
        alert('vehicle not found');
      }
    } catch (error) {
      console.error('error update of vehicles',error)
    }
  }
  return (
    <div className='main-container'>
          <div className='head-section'><NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
          </NavLink>
        <h2>Vehicle Details of <span style={{color:'#26497a',textDecoration:'underline'}}>Registration No:</span> {id}</h2>
      </div>
      <div style={{float:'right'}}><UserView id={id}  /></div>
      
          <form className='form' onSubmit={handleSubmit}>
              <div className='form-outer-box'>
                  <h5>Primary Quotation Submitted to Surveyor</h5>
                <div className='form-content' style={{boxShadow: '0px 10px 10px -3px #8fb2d7c9',backgroundColor: '#CED9E5'}}>
                  <div className='input-group'>
                   <label htmlFor='Primary_Quotation_Submitted_to_Surveyor.date'>Date</label>
                   <input type='date' name='Primary_Quotation_Submitted_to_Surveyor.date' onChange={handleChange} value={vehicles.Primary_Quotation_Submitted_to_Surveyor.date} className='input'/>
                  </div>
                <div className='input-group'>
                  <label htmlFor='primaryQuotTimePrimary_Quotation_Submitted_to_Surveyor.time'>Time</label>
                  <input type='time' name='Primary_Quotation_Submitted_to_Surveyor.time' className='input' onChange={handleChange} value={vehicles.Primary_Quotation_Submitted_to_Surveyor.time}/>
                      </div>
                      <div className='input-group'>
                   <label htmlFor='Primary_Quotation_Submitted_to_Surveyor.quotation_No'>Quotation No.</label>
                   <input type='text' name='Primary_Quotation_Submitted_to_Surveyor.quotation_No' className='input' onChange={handleChange} value={vehicles.Primary_Quotation_Submitted_to_Surveyor.quotation_No}/>
                  </div>
                <div className='input-group'>
                  <label htmlFor='Primary_Quotation_Submitted_to_Surveyor.price'>Price</label>
                  <span> ₹ <input type='number' name='Primary_Quotation_Submitted_to_Surveyor.price' className='input' onChange={handleChange} value={vehicles.Primary_Quotation_Submitted_to_Surveyor.price}/></span>
                </div>
                <div className='input-group' style={{justifySelf:'flex-end'}}>
                  <label htmlFor='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                      
              
                  </div>
              </div>
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Insurance Surveyor Visiting</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Insurance_Surveyor_Visiting_to_Workshop.date'>Date</label>
                   <input type='date' name='Insurance_Surveyor_Visiting_to_Workshop.date'onChange={handleChange} value={vehicles.Insurance_Surveyor_Visiting_to_Workshop.date} className='input'/>
                  </div>
                <div className='input-group' >
                  <label htmlFor='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Customer Approval Received from Insurance</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Customer_Approval_Received_From_Insurance.date'>Date</label>
                   <input type='date' name='Customer_Approval_Received_From_Insurance.date' onChange={handleChange} value={vehicles.Customer_Approval_Received_From_Insurance.date} className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Dismantling Work Started</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Dismantling_Work_Started.date'>Date</label>
              <input type='date' name='Dismantling_Work_Started.date' onChange={handleChange} value={vehicles.Dismantling_Work_Started.date}  className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Dismantling Work Completed Date</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Dismantling_Work_Completed.date'>Date</label>
                   <input type='date' name='Dismantling_Work_Completed.date' onChange={handleChange} value={vehicles.Dismantling_Work_Completed.date} className='input'/>
                  </div>
                <div className='input-group' >
                  <label htmlFor='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>

              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Secondary Estimation Shared</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Secondary_Estimation_Shared.date'>Date</label>
                   <input type='date' name='Secondary_Estimation_Shared.date' onChange={handleChange} value={vehicles.Secondary_Estimation_Shared.date} className='input'/>
                  </div>
                  </div>
              </div>
              
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Customer Approval Received from Insurance</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='cCustomer_Approval_Received_From_Insurance_After.date'>Date</label>
                   <input type='date' name='Customer_Approval_Received_From_Insurance_After.date' onChange={handleChange} value={vehicles.Customer_Approval_Received_From_Insurance_After.date} className='input'/>
                  </div>
                  </div>
              </div>
              
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Parts Ordering Date</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label htmlFor='Parts_Ordering_Date.date'>Date</label>
                   <input type='date' name='Parts_Ordering_Date.date' onChange={handleChange} value={vehicles.Parts_Ordering_Date.date} className='input'/>
                  </div>
                <div className='input-group' >
                  <label htmlFor='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>
              
              <div className='form-outer-box'>
                  <h5>Last Part ETA</h5>
                <div className='form-content' style={{boxShadow: '0px 10px 10px -3px #8fb2d7c9',backgroundColor: '#CED9E5'}}>
                  <div className='input-group'>
                   <label htmlFor='Last_Part_ETA.date'>Date</label>
                   <input type='date' name='Last_Part_ETA.date' onChange={handleChange} value={vehicles.Last_Part_ETA.date} className='input'/>
                  </div>
                <div className='input-group'>
                  <label htmlFor='Last_Part_ETA.tentive_Time'>Time</label>
                  <input type='text' name='Last_Part_ETA.tentive_Time' className='input' onChange={handleChange} value={vehicles.Last_Part_ETA.tentive_Time}/>
                  </div>
                     
              
            </div>
           </div>
           
              <div className='input-group'>
                  <button type='submit' className='submit-btn' style={{width:'250px'}}>Submit Details</button>
              </div>

        </form>
    </div>
  )
}
