import React, { useState } from 'react'
import './HomePage.css'
import { NavLink } from 'react-router-dom'
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineMenuOpen } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsCollection } from "react-icons/bs";
import { SlHome } from "react-icons/sl";

// menu items
const menuItems = [
    { path: '/', name: 'Home', icon: <SlHome /> },
    { path: '/dashboard', name: 'DashBoard', icon: <TbBrandGoogleAnalytics /> },
    { path: '/existingvehicles', name: 'Existing Vehicle', icon: <BsCollection/> },
    
]
export const HomePage = ({ children }) => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className='container' >
           
            <div className='sidebar' style={{width:open?'300px':'50px'}}>
            <div className='top-section'>
                <h1 style={{display:open?"block":'none',marginLeft:open?'45px':'0px'}}>VOLVO</h1>
                <div className='open-close-btn' style={{marginLeft:open?'50px':'0px'}}>
                   {open? <MdOutlineMenuOpen onClick={handleOpen} />:<HiMiniBars3 onClick={handleOpen}/>}
                </div>
            </div>
           
            {
                menuItems.map((item, index) => (
                <NavLink to={item.path} key={index} className="link">
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text' style={{display:open?"block":'none'}}>{item.name}</div>
                </NavLink>
            ))
            }
          
           
            </div>
            <main>
                <div className='navbar'></div>
                <div className='child'>{children}</div>
                
            </main>
        </div>
    )
}
