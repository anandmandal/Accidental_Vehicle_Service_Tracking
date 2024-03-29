import React from 'react'
import './AddNewVehicles.css'
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

export const AddNewVehicles = () => {
  const navigate = useNavigate();
  return (
    <div className='container-add'>
          <div className='heading-'>
            <NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
            </NavLink>
              <h2>Add new Vehicles</h2>
          </div>
          <div className='vehicle-form'>
            <form>

                <div className='input-group'>
                  <label for='vehicleRegsNo'>Vehicle Registration No.</label>
                  <input type='text' name='vehicleRegsNo' className='input'/>
                </div>
                <div className='input-group'>
                  <label for='ch_id'>CH ID</label>
                  <input type='text' name='ch_id' className='input'/>
                </div>


            <div className='input-group'>
                <label for='customerName'>Customer Name</label>
                <select type='text' name='customerName' className='input'>
                  <option value=''>none</option>
                  <option value="01">Delhivery Pvt. Ltd.</option>
                  <option value="02">Nutan Rajumani Transport</option>
                  <option value="03">ARL Express Logistics Pvt. Ltd</option>
                  <option value="04">Dhir E Logistics</option>
                  <option value="05">New Shree Bombay Transport Carriers</option>
                </select>
              </div>
              <div className='input-group'>
                <label for='reportingDate'>Reporting Date</label>
                <input type='date' name='reportingDate' className='input'/>
              </div>

            <div className='input-group'>
                <label for='hrs'>HRS</label>
                <input type='time' name='hrs' className='input'/>
              </div>
              <div className='input-group'>
                <label for='kms'>KMS</label>
                <input type='number' name='kms' className='input'/>
              </div>
            <br/>
            <div className='input-group right-next-btn'>
              <button type='submit' onClick={()=>{navigate('/addvehicledetails')}} className='submit-btn'>Next</button>
            </div>
            </form>
          </div>
    </div>
  )
}
