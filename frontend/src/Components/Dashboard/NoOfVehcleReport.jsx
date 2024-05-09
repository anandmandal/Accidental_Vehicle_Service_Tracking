import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import Chart.js and the registerables

// Manually register the 'linear' scale
Chart.register(...registerables);

const ReportingGraph = ({ data }) => {
  const [reportingData, setReportingData] = useState([]);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const countReportedVehiclesByMonth = () => {
      const counts = {};
      data.forEach(vehicle => {
        const month = new Date(vehicle.reporting_Date).getMonth() + 1;
        counts[month] = (counts[month] || 0) + 1;
      });
      return counts;
    };
  
    const countedData = countReportedVehiclesByMonth();
    const months = [...Array(12).keys()].map(month => month + 1);
  
    const reportingCounts = months.map(month => countedData[month] || 0);
    setReportingData(reportingCounts); // <-- setState here is causing the issue
  }, [data]); // <-- Ensure that 'data' is the only dependency
  
  // Remove this useEffect block if it's not necessary, or adjust the dependencies if needed
  useEffect(() => {
    return () => {
      setChartKey(prevKey => prevKey + 1);
    };
  }, []); // <-- Provide an empty dependency array if the effect should only run once
  
  const chartData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Number of Vehicles Reported',
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 4,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        innerWidth:'300px',
        data: reportingData
      }
    ]
  };

  return (
    <div>
      <h2 style={{textAlign:'center',marginBottom:'10px'}}>No. of vehicles reported</h2>
      <Bar
      style={{width:'400px',height:'300px'}}
        key={chartKey}
        data={chartData}
        options={{
          indexAxis: 'x',
          scales: {
            y: {
                type: 'linear', // Ensure the 'linear' scale is registered
              beginAtZero: true,
              
            }
            }
            
        }}
      />
    </div>
  );
};

export default ReportingGraph;
