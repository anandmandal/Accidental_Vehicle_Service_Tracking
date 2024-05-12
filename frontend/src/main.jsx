import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './index.css'

import { AddNewVehicles } from './Components/AddNewVehiclepages/AddNewVehicles.jsx'
import { ExistingVehicles } from './Components/ExistingVehicle/ExistingVehicles.jsx'
import { AddVehicleDetails } from './Components/AddVehicleDetails/AddVehicleDetails.jsx'
import { DayWiseUpdate } from './Components/DayWiseUpdate/DayWiseUpdate.jsx'
import { HomePage } from './Components/Sidebar/HomePage.jsx'
import { LandingPage } from './Components/LandingPage/LandingPage.jsx'
import { UserView } from './Components/UserScreen/userView.jsx'
import { CustomerView } from './Components/UserScreen/customerPage.jsx'
import dash_home from './Components/Dashboard/dash_home.jsx'

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
          <Route path='/daywiseupdate/:id' Component={DayWiseUpdate} />
          <Route path='/userview/' Component={UserView} />
          <Route path='/customerview/:id' Component={CustomerView} />
          <Route path='/dashboard' Component={dash_home}/>
      </Routes>
      </HomePage>
    </BrowserRouter>
    
  </React.StrictMode>,
)
