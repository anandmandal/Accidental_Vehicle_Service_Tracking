import React from 'react'
import './AddVehiclesDetails.css'
import { IoArrowBack } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaFilePdf } from 'react-icons/fa'

export const AddVehicleDetails = () => {
    const navigate = useNavigate();
  return (
    <div className='main-container'>
          <div className='head-section'>
          <NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
            </NavLink>
              <h2>Vehicle Details of ...</h2>
          </div>
          <form className='form'>
              <div className='form-outer-box'>
                  <h5>Primary Quotation Submitted to Surveyor</h5>
                <div className='form-content' style={{boxShadow: '0px 10px 10px -3px #8fb2d7c9',backgroundColor: '#CED9E5'}}>
                  <div className='input-group'>
                   <label for='primaryQuotDate'>Date</label>
                   <input type='date' name='primaryQuotDate' className='input'/>
                  </div>
                <div className='input-group'>
                  <label for='primaryQuotTime'>Time</label>
                  <input type='time' name='primaryQuotTime' className='input'/>
                      </div>
                      <div className='input-group'>
                   <label for='primaryQutNo'>Quotation No.</label>
                   <input type='text' name='primaryQutNo' className='input'/>
                  </div>
                <div className='input-group'>
                  <label for='primaryPrice'>Price</label>
                  <span> ₹ <input type='number' name='primaryPrice' className='input'/></span>
                </div>
                <div className='input-group' style={{justifySelf:'flex-end'}}>
                  <label for='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                      
              
                  </div>
              </div>
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Insurance Surveyor Visiting</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='insuranceVisitDate'>Date</label>
                   <input type='date' name='insuranceVisitDate' className='input'/>
                  </div>
                <div className='input-group' >
                  <label for='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Customer Approval Received from Insurance</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='customerApprovalDate'>Date</label>
                   <input type='date' name='customerApprovalDate' className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Dismantling Work Started</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='dismantlingstartedDate'>Date</label>
                   <input type='date' name='dismantlingstartedDate' className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Dismantling Work Completed Date</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='dismantlingCompletedDate'>Date</label>
                   <input type='date' name='dismantlingCompletedDate' className='input'/>
                  </div>
                <div className='input-group' >
                  <label for='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>

              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Secondary Estimation Shared</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='secondaryEstmDate'>Date</label>
                   <input type='date' name='secondaryEstmDate' className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5    >Customer Approval Received from Insurance</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='custAppRecvdDate'>Date</label>
                   <input type='date' name='custAppRecvdDate' className='input'/>
                  </div>
                  </div>
              </div>
              <hr className='breaker' />
              <div className='form-outer-box' style={{marginTop:'40px'}}>
                  <h5>Parts Ordering Date</h5>
                <div className='form-content' >
                  <div className='input-group'>
                   <label for='partsOrderDate'>Date</label>
                   <input type='date' name='partsOrderDate' className='input'/>
                  </div>
                <div className='input-group' >
                  <label for='primaryfile'>Upload file</label>
                          <span style={{display:'flex',alignItems:'center',border:'1px dashed #202A44',padding:'5px'}}>  <input type='file' accept='.pdf'  name='primaryfile' className='input file' style={{height:'35px',}}/><FaFilePdf style={{marginLeft:'5px',}} /></span>
                      </div>
                  </div>
              </div>
              <div className='input-group'>
                  <button type='submit'onClick={()=>{navigate('/existingvehicles')}} className='submit-btn' style={{width:'250px'}}>Submit Details</button>
                  
              </div>

        </form>
    </div>
  )
}
