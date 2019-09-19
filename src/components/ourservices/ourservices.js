import React from 'react'
import './ourservices.css'
import plots from '.././assets/plots.png'
import apartments from '.././assets/apartments.png'
import villas from '.././assets/villas.png'
import Commercial from '.././assets/commercial.png'
import {NavLink} from 'react-router-dom'

const OurServices=()=>(
<div>
    <div class="heading">
    <h1>Our Services</h1>
    </div>
        <div className="content-box">
        <div className="box">
            <div className="content">
                <h2>01</h2>
                <img src={plots}/>
                <h3>Plots</h3>        
                 <NavLink to="/ourservicescontent">More..</NavLink>        
            </div>
        </div>
        <div className="box">
            <div className="content">
                <h2>02</h2>
                <img src={apartments}/>
                <h3>Apartments</h3>
                <NavLink to="/ourservicescontent">More..</NavLink>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <h2>03</h2>
                <img src={villas}/>
                <h3>Villas</h3>
                <NavLink to="/ourservicescontent">More..</NavLink>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <h2>04</h2>
                <img src={Commercial}/>
                <h3>Commercial Complex</h3>
                <NavLink to="/ourservicescontent">More..</NavLink>
            </div>
        </div>
    </div>
    </div>)
export default OurServices;