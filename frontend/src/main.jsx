import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './index.css'

import { AddNewVehicles } from './Components/AddNewVehiclepages/AddNewVehicles.jsx'
import { ExistingVehicles } from './Components/ExistingVehicle/ExistingVehicles.jsx'
import { AddVehicleDetails } from './Components/AddVehicleDetails/AddVehicleDetails.jsx'
import { DayWiseUpdate } from './Components/DayWiseUpdate/DayWiseUpdate.jsx'
import { HomePage } from './Components/Sidebar/HomePage.jsx'
import { LandingPage } from './Components/LandingPage/LandingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <HomePage>
      <Routes>
        <Route path='/' Component={LandingPage} />
          <Route path='/addVehicle' Component={AddNewVehicles} />
          <Route path='/existingvehicles' Component={ExistingVehicles} />
          <Route path='/addvehicledetails' Component={AddVehicleDetails} />
          <Route path='/addvehicledetails/:id' Component={AddVehicleDetails}/>
          <Route path='/daywiseupdate/:id' Component={DayWiseUpdate}/>
      </Routes>
      </HomePage>
    </BrowserRouter>
    
  </React.StrictMode>,
)
