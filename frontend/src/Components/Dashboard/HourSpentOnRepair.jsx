import React from 'react';
import { Bar } from 'react-chartjs-2';

const RepairTasksChart = ({ data }) => {
  // Function to extract unique repair tasks
  const getUniqueTasks = () => {
    const uniqueTasks = new Set();
    data.forEach(vehicle => {
      Object.keys(vehicle).forEach(key => {
        if (key.endsWith('_Work_Started') || key.endsWith('_Work_Completed')) {
          uniqueTasks.add(key.replace('_Work_Started', '').replace('_Work_Completed', ''));
        }
      });
    });
    return Array.from(uniqueTasks);
  };

  // Function to calculate hours spent on each repair task for each vehicle
  const calculateHoursPerTask = () => {
    const uniqueTasks = getUniqueTasks();
    const hoursPerTask = [];

    data.forEach(vehicle => {
      const hoursData = {
        label: vehicle.vehicle_Registration_No,
        data: [],
      };

      uniqueTasks.forEach(task => {
        const started = vehicle[`${task}_Work_Started`].date;
        const completed = vehicle[`${task}_Work_Completed`].date;
        const hoursSpent = completed ? Math.ceil((new Date(completed) - new Date(started)) / (1000 * 60 * 60)) : 0;
        hoursData.data.push(hoursSpent);
      });

      hoursPerTask.push(hoursData);
    });

    return hoursPerTask;
  };

  const chartData = {
    labels: getUniqueTasks(),
    datasets: calculateHoursPerTask().map(data => ({
      label: data.label,
      data: data.data,
    })),
  };

  return (
    <div>
      <h2 style={{textAlign:'center',marginBottom:'10px'}}>Hours Spent on Repair Tasks</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        }}
      />
    </div>
  );
};

export default RepairTasksChart;
