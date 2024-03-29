import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineAdd } from "react-icons/md";
import './ExistingVehicles.css'
import { FaSearch } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";


export const ExistingVehicles = () => {
    const navigate = useNavigate();
  return (
    <div className='exist-container'>
          <div className='heading'>
              <h2>Existing Vehicles</h2>
              <NavLink to={'/addVehicle'} className='link-add'>
                  <MdOutlineAdd/>
                  <button>New Vehicle</button>
              </NavLink>
          </div>
          <div className='search-container'>
              <form action='' className='form'>
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Registration Number</label>
                      <input className='input' name='vehicleRegsNo' type='text'/>
                  </div>
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Chassis Number</label>
                      <input className='input' name='chId' type='text'/>
                  </div>
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Date</label>
                      <input className='input' name='comingDate' type='date'/>
                  </div>
                  <div className='input-group'>
                      <button className='submit-btn' name='vehicleRegsNo' type='submit'> <FaSearch/> </button>
                  </div>
              </form>
          </div>
          {/* Table */}
          <div className='table-container'>
              <table style={{width:'100%'}}>
                  <tr>
                  <th>
                      Sr no.
                  </th>
                  <th>
                      Customer Name
                  </th>
                  <th>
                      Registration no.
                  </th>
                  <th>
                      Date of Arrival
                  </th>
                  <th>
                      Status
                  </th>
                  <th>
                      Edit
                  </th>
                  <th>
                      Update Work
                  </th>
                  </tr>
                  <tbody >
                      <tr >
                          <td>01</td>
                          <td>Abhay Mandal</td>
                          <td>1258khy25</td>
                          <td>24/02/24</td>
                          <td><span style={{backgroundColor:'#33b249',borderRadius:'20px',padding:'5px 10px',fontSize:'12px',color:'#fff',fontWeight:'600'}}>completed</span></td>
                          <td><button onClick={()=>{navigate(`/addvehicledetails/01`)}} className='edit btn'><FaRegEdit/></button></td>
                          <td><button className='update btn' onClick={()=>{navigate('/daywiseupdate/01')}}><MdOutlineUpdate/></button></td>
                      </tr>
                      <tr >
                          <td>01</td>
                          <td>Abhay Mandal</td>
                          <td>1258khy25</td>
                          <td>24/02/24</td>
                          <td><span style={{backgroundColor:'#ed0800',borderRadius:'20px',padding:'5px 10px',fontSize:'12px',color:'#fff',fontWeight:'600'}}>notstart</span></td>
                          <td><button className='edit btn'><FaRegEdit/></button></td>
                          <td><button className='update btn'><MdOutlineUpdate/></button></td>
                      </tr>
                      <tr >
                          <td>01</td>
                          <td>Abhay Mandal</td>
                          <td>1258khy25</td>
                          <td>24/02/24</td>
                          <td><span style={{backgroundColor:'#ffbd03',borderRadius:'20px',padding:'5px 10px',fontSize:'12px',color:'#fff',fontWeight:'600'}}>progress</span></td>
                          <td><button className='edit btn'><FaRegEdit/></button></td>
                          <td><button className='update btn'><MdOutlineUpdate/></button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
  )
}
