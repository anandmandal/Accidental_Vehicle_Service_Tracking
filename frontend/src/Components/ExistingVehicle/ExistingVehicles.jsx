import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete, MdOutlineAdd } from "react-icons/md";
import "./ExistingVehicles.css";
import { FaSearch } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import api from "../../API/vehicles.api";
import { MdOutlineDelete } from "react-icons/md";
import { UserView } from "../UserScreen/userView";

export const ExistingVehicles = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [status, setStatus] = useState();
  const [searchKey, setSearchKey] = useState({
    vehicleRegsNo: '',
    chId: '',
    comingDate: ''
  });
  
  //updating status
  const handleChange = async (e, registration_no) => {
    const newStatus = e.target.value;
    try {
      // const response = await api.put(`/update-status/${registration_no}`, { new_status: newStatus });
      const response = await api.put(`/update-status/${registration_no}?new_status=${newStatus}`);
      console.log(response.data); // Log the response from the 
      fetchAllVehicles();
      
    } catch(error) {
      console.error("error updating status ", error);
    }
  }

  const fetchAllVehicles = async () => {
    try {
      const response = await api.get("/vehicles/");
      setVehicles(response.data);
    } catch (error) {
      console.error("error fetching data at home", error);
    }
  };
  useEffect(() => {
    fetchAllVehicles();
  }, []);

  const handleDelete = async (vehicle) => {
    const response = confirm(
      `Do you want to delete\n RegsNo:${vehicle.vehicle_Registration_No}\n Customer Name: ${vehicle.customer_Name}`
    );
    if (response) {
      try {
        const res = await api.delete(
          `/vehicles/${vehicle.vehicle_Registration_No}/delete`
        );
        if (res.data.message) {
          alert(res.data.message);
        }
      } catch (error) {
        console.error("error delete", error);
      }
    }
  };

  //search handle
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchKey({ ...searchKey, [name]: value });
    console.log(searchKey);
      fetchAllVehicles();
    
  }
  const handleSearchSubmit = async(e) => {
    e.preventDefault();
     
      const filteredVehicles=vehicles.filter(vehicle => {
        return (
          (!searchKey.chId||vehicle.ch_Id.includes(searchKey.chId)) &&
          (!searchKey.vehicleRegsNo||vehicle.vehicle_Registration_No===searchKey.vehicleRegsNo) &&
          (!searchKey.comingDate||vehicle.reporting_Date === searchKey.comingDate)
        );
      })
    setVehicles(filteredVehicles)
      console.log(filteredVehicles)
      if (filteredVehicles.length === 0) {
        alert('no such vehicle found');
        setSearchKey({
          vehicleRegsNo: '',
          chId: '',
          comingDate: ''
        })
        fetchAllVehicles();
      }
    
  }
  return (
    <div className="exist-container">
      <div className="heading">
        <h2>Existing Vehicles</h2>
        <NavLink to={"/addVehicle"} className="link-add">
          <MdOutlineAdd />
          <button>New Vehicle</button>
        </NavLink>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit} className="form-search">
          <div className="input-group">
            <label htmlFor="vehicleRegsNo">Enter Registration Number</label>
            <input className="input" name="vehicleRegsNo" onChange={handleSearchChange} value={searchKey.vehicleRegsNo} type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="vehicleRegsNo">Enter Chassis Number</label>
            <input className="input" name="chId"onChange={handleSearchChange} value={searchKey.chId}  type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="vehicleRegsNo">Enter Date</label>
            <input className="input" name="comingDate" onChange={handleSearchChange} value={searchKey.comingDate}  type="date" />
          </div>
          <div className="input-group">
            <button className="submit-btn" name="vehicleRegsNo" type="submit">
              {" "}
              <FaSearch />{" "}
            </button>
          </div>
        </form>
      </div>
      {/* Table */}
      <div className="table-container">
        {vehicles.length <= 0 ? (
          "Wait the table is loading..."
        ) : (
          <table style={{ width: "100%" }}>
            <tr>
              <th>Sr no.</th>
              <th>Customer Name</th>
              <th>Registration no.</th>
              <th>Date of Arrival</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Update Work</th>
              <th>Delete</th>
            </tr>

            

            {vehicles.map((item, index) => (
              <tr key={index} className="tbody">
                <td>{index + 1}</td>
                <td>{item.customer_Name}</td>
                <td>{item.vehicle_Registration_No}</td>
                <td>{item.reporting_Date}</td>
                <td>
                  
                    <select style={{
                      backgroundColor: (item.status==='Completed')?"#7ABA78":(item.status==='In-process')?"#FDDE55":'#C73659',
                      borderRadius: "20px",
                      padding: "5px 10px",
                      fontSize: "12px",
                      color: "black",
                      fontWeight: "600",
                    }}onChange={e => handleChange(e, item.vehicle_Registration_No)} value={item.status?item.status:'Active'}  > 
                        <option value='Active'>Active</option>
                        <option value='In-process'>In-process</option>
                        <option value='Completed'>Completed</option>
                    </select>
                  
                </td>
                <td>
                  <button
                    className="edit btn"
                    onClick={() => {
                      navigate(
                        `/addvehicledetails/${item.vehicle_Registration_No}`
                      );
                    }}
                  >
                    <FaRegEdit />
                  </button>
                </td>
                <td>
                  <button
                    className="update btn"
                    onClick={() => {
                      navigate(
                        `/daywiseupdate/${item.vehicle_Registration_No}`
                      );
                    }}
                  >
                    <MdOutlineUpdate />
                  </button>
                </td>
                <td>
                  <button
                            id="delete"
                            className="delete btn"
                            onClick={() => {
                                handleDelete(item);
                            }}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};
