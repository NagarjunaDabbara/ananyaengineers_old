import React from "react"
import './navigation.css'
import AnanyaLogo from '.././assets/logo.PNG'
import {NavLink} from 'react-router-dom'


const Navigation = (props) => (

    <div className="container1">
    <nav>
  
        <img  src={AnanyaLogo} className="logo" />
       
        <ul>
        <li> <NavLink to='/'> Home</NavLink></li>
        <NavLink to='/about'>  <li> About</li></NavLink>
        <NavLink to='/Projects'><li> Projects</li></NavLink>
        <NavLink to='/contactUs'><li> Contact Us</li></NavLink>
          
        </ul>
      
    </nav>
</div>

)
export default Navigation