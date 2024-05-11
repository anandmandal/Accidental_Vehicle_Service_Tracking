import React, { useEffect, useState } from 'react'
import './DayWiseUpdate.css'
import { NavLink, useParams } from 'react-router-dom'
import { IoAddSharp, IoArrowBack } from 'react-icons/io5'
import api from '../../API/vehicles.api'
import { MdDeleteForever, MdEdit, MdEditAttributes, MdEditDocument, MdOutlineDirectionsWalk } from 'react-icons/md'

export const DayWiseUpdate = () => {
    const { id } = useParams();
    const [previousData, setPreviousData] = useState([]);
    const [newWork,setNewWork]=useState(
        {
          date: "",
          work_Details: ""
        }
      )
    const fetchDayWise = async () => {
        try {
            const response = await api.get(`/vehicles/${id}/daywiseupdate`)
            setPreviousData(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchDayWise();
    }, [newWork])
    
    const handleNewWork = (e) => {
        const { name, value } = e.target;
        setNewWork({ ...newWork, [name]: value });
        console.log(JSON.stringify(newWork))
    }
    const handleNewWorkSubmit = async(e) => {
        e.preventDefault();
        if (newWork.date != '' && newWork.work_Details != '') {
            try {
                const res = await api.put(`/vehicles/${id}/daywiseupdate`, newWork);
                if (res.data.message) {
                    alert(res.data.message);
                    setNewWork( {
                        date: "",
                        work_Details: ""
                      })
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Fill all details");
        }
    }

    //handle previous change
    const handlePrevChange = () => {
        
    }
    //handle delete
    const handleDelete = async (day) => {
        console.log(JSON.stringify(day))
        const isDelete = confirm(`Do you want to delete work of [${day.date}]\n `);
        if (isDelete) {
            try {
                const res = await api.delete(`/vehicles/${id}/daywiseupdate?work_details=${day.work_Details}`);
                if (res.data.message) {
                    alert(res.data.message)
                    fetchDayWise()
                }
            } catch (error) {
                console.error(error)
            }
        } 
    }
  return (
      <div className='dayWise-container'>
           <div className='head-section'>
          <NavLink to={'/existingvehicles'} style={{color:'#202A44'}}>
            <IoArrowBack style={{ fontSize:'30px',marginRight:'20px',marginTop:'6px'}}/>
            </NavLink>
              <h2>Day wise Update of {id}</h2>
          </div>
          <div className='search-container message'>
              <form className='form' onSubmit={handleNewWorkSubmit}>
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Today's Work</label>
                      <textarea className='input-text' name='work_Details' type='text' onChange={handleNewWork} value={newWork.work_Details} placeholder='Enter your work description'/>
                  </div>
                  
                  <div className='input-group'>
                      <label for='vehicleRegsNo'>Enter Date</label>
                      <input type='date'onChange={handleNewWork} value={newWork.date} name='date' className='input' />
                  </div>
                  
                      <button className='addwork-btn'  type='submit'>Add</button>
                 
              </form>
          </div>
          <div className='previous-updates'>
              <h2>Previous Updates</h2>
              <hr className='breaker' />
              {
                  (previousData.length <=1) ?( <span>No previous work added</span> ): (
                      
                  previousData.map((day, index) => (
                    (index>=1)?(<form key={index} className='form-group' style={{backgroundColor:index%2==0?'#f5f5f5':'#848482ac'}}>
                    <h5>Day { index}</h5>
                <input className='input-text' name='vehicleRegsNo' type='text' onChange={handlePrevChange} value={day.work_Details} placeholder='Enter your work description'/>
            
                <input className='input' name='comingDate' value={day.date} onChange={handlePrevChange}  type='date'/>
            
                <div className=''>
                <button className='edit work-btn' type='button' name='vehicleRegsNo'><MdEditDocument/></button>
                <button className='delete  work-btn' type='button' onClick={()=>{
                    handleDelete(day)
                }} ><MdDeleteForever/></button>
                </div>
           
        </form>):(<h4></h4>)
                ))
                  )
                }
              </div>
    </div>
  )
}
