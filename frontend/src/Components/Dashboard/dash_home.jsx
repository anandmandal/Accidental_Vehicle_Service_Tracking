import React, { useEffect, useState } from 'react'
import { BsTruckFrontFill } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";
import { LiaShareAltSolid } from "react-icons/lia";
import { RiDonutChartFill } from "react-icons/ri";
import ReportingGraph from './NoOfVehcleReport';
import api from '../../API/vehicles.api';
import './dashboard.css';
import RepairTasksChart from './HourSpentOnRepair';

function dash_home() {
    const [vehicles, setVehicles] = useState([]);
    const [activeCount, setActiveCount] = useState(0);
    const [inProgressCount, setInProgressCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);

    const fetchAllVehicles = async () => {
        try {
          const response = await api.get("/vehicles/");
          setVehicles(response.data);
        } catch (error) {
          console.error("error fetching data at home", error);
        }
    };

    const handleCounts = (items) => {
        const activeVehicles = items.filter(vehicle => vehicle.status === 'Active');
        const inProgressVehicles = items.filter(vehicle => vehicle.status === 'In-process');
        const completedVehicles = items.filter(vehicle => vehicle.status === 'Completed');
        
        setActiveCount(activeVehicles.length);
        setInProgressCount(inProgressVehicles.length);
        setCompletedCount(completedVehicles.length);
    }

    useEffect(() => {
        fetchAllVehicles();
    }, []);

    useEffect(() => {
        if (vehicles.length > 0) {
            handleCounts(vehicles);
        }
    }, [vehicles]);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>
            <div className='main-cards'>
                <div className='card-status'>
                    <div className='card-inner'>
                        <h3>Total Vehicles</h3>
                        <BsTruckFrontFill className='card_icon'/>
                    </div>
                    <h1>{vehicles.length}</h1>
                </div>
                <div className='card-status'>
                    <div className='card-inner'>
                        <h3>Active</h3>
                        <SiReactrouter className='card_icon'/>
                    </div>
                    <h1>{activeCount}</h1>
                </div>
                <div className='card-status'>
                    <div className='card-inner'>
                        <h3>In-process</h3>
                        <LiaShareAltSolid className='card_icon'/>
                    </div>
                    <h1>{inProgressCount}</h1>
                </div>
                <div className='card-status'>
                    <div className='card-inner'>
                        <h3>Completed</h3>
                        <RiDonutChartFill className='card_icon'/>
                    </div>
                    <h1>{completedCount}</h1>
                </div>
            </div>
            <div className='monthly_report' style={{marginTop:'50px'}}>
                <ReportingGraph data={vehicles} />
                <RepairTasksChart data={vehicles}/>
            </div>
        </main>
    )
}

export default dash_home;
