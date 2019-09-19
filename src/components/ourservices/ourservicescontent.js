import React from 'react'
import './ourservicescontent.css'
import plots from '.././assets/plots.png'
import apartments from '.././assets/apartments.png'
import villas from '.././assets/villas.png'
import Commercial from '.././assets/commercial.png'
import Navigation from '../../components/navigation/navigation.js'
import Footer from '../../components/footer/footer.js'
import {NavLink} from 'react-router-dom'

const OurServicesContent=()=>(
<div>
  <Navigation/>
<section class="hero">
<svg class="diagonal"  viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="#fff" points="-0,100 -100,0 100,100"></polygon>
            </svg>
</section>

<section class="service-content">
  <div class="left-content">
    <img src={plots}/>
  </div>
  <div class="right-content">
    <h1>Plots</h1>
    <p>When a plot costs a fortune, Ananya has overwritten the finance formula in favour of the customer’s needs and help them in achieving their aspirations through a well-grounded process by creating awareness on purchasing plots.</p>
    <NavLink to='/projects'>view</NavLink>
  </div>
  <svg class="diagonal"  viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon fill="#dcdbdb" points="0,100 100,0 100,100"></polygon>
                        </svg>
                        </section>


<section class="service-content-two">
  <svg class="diagonal"  viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="#fff" points="-0,100 -100,0 100,100"></polygon>
            </svg>
  <div class="left-content">
    <img src={apartments}/>
  </div>
  <div class="right-content">
    <h1>Apartments</h1>
    <p>Ananya provides flats for a reasonable price where a common man can accomplish his dream of living a well-deserved lifestyle in an apartment with alluring locality.</p>
    <NavLink to='/projects'>view</NavLink>
  </div>
 </section>

<section class="service-content">
  <div class="left-content">
    <img src={villas}/>
  </div>
  <div class="right-content">
    <h1>Villas</h1>
    <p>Ananya anticipates escorting you from the congested and packed environment to a spacious and luxurious villa with unique and customized design which gives you quality and comfortable presence with a beautiful landscape of your choice.</p>
    <NavLink to='/projects'>view</NavLink>
  </div>
  <svg class="diagonal"  viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon fill="#dcdbdb" points="0,100 100,0 100,100"></polygon>
                        </svg>
  
</section>

<section class="service-content-four">
  <svg class="diagonal"  preserveAspectRatio="none">
                <polygon fill="#fff" points="-0,100 -100,0 100,100"></polygon>
            </svg>
  <div class="left-content">
    <img src={Commercial}/>
  </div>
  <div class="right-content">
    <h1>Commercial Complex</h1>
    <p>Ananya attracts customers with its enormous construction of commercial complexes which comprises multiple retail stores with food, entertainment and shopping at a single place. A family can spend their day’s time with enthusiasm and amusement.</p>
    <NavLink to='/projects'>view</NavLink>
  </div>
 </section>
<Footer/>
    </div>
   
)
export default OurServicesContent;
