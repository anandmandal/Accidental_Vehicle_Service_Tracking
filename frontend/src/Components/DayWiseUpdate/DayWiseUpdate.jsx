import React from 'react'
import './DayWiseUpdate.css'
import { NavLink } from 'react-router-dom'
import { IoAddSharp, IoArrowBack } from 'react-icons/io5'

export const DayWiseUpdate = () => {
    const date = new Date();
  return (
      <div className='dayWise-container'>
           <div className='head-section'>
          <NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
            </NavLink>
              <h2>Day wise Update</h2>
          </div>
          <div className='search-container message'>
              <form action='' className='form'>
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Today's Work</label>
                      <textarea className='input-text' name='vehicleRegsNo' type='text' placeholder='Enter your work description'/>
                  </div>
                  
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Date</label>
                      <input type='date' className='input'  name='comingDate' value="2022-02-17"  />
                  </div>
                  
                      <button className='addwork-btn' name='vehicleRegsNo' type='submit'>Add</button>
                 
              </form>
          </div>
          <div className='previous-updates'>
              <h2>Previous Updates</h2>
              <hr className='breaker' />
              <form action='' className='form-group'>
                  <h5>Day 1</h5>
                
                     
                      <input className='input-text' name='vehicleRegsNo' type='text' value={'dismantalling all parts'} placeholder='Enter your work description'/>
                  
                      <input className='input' name='comingDate' defaultValuevalue={date} type='date'/>
                  
                      <button className='addwork-btn' name='vehicleRegsNo' type='submit'>Edit</button>
                 
              </form>
              </div>
    </div>
  )
}
