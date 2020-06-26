import React from 'react'
import './footer.css'
import {NavLink} from 'react-router-dom'

const Footer=()=>(


<div className="footer-wrapper">
  <div className="top-img"></div>
  <div className="container-fluid">
    
    <div className="footer-social-icons">
      <ul>
     
      </ul>
    </div>

    <div className="footer-mid-part">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="footer-section-one">
            <div className="footer-heading"><h2>Contact Us</h2></div>
            <div className="footer-contact-box">
            <div className="footer-contact-icon"><i className="fa fa-map-marker"></i></div>
            <div className="footer-contact-text">
              <p>Address:Ananya Engineers(Reg as Ananya Global Consultants) 
              1 St Floor, SS Complex,
              Kamalanagar,
              Anantapur - 515001, Beside Muthoot Finance - DCMS Road.</p>
            </div>
            <div className="clr"></div>
          </div>

           <div className="footer-contact-box">
            <div className="footer-contact-icon"><i className="fa fa-phone"></i></div>
            <div className="footer-contact-text">
              <p><a href="tel:+012-3456-789">8309618336;</a></p>
            </div>
            <div className="clr"></div>
          </div>

           <div className="footer-contact-box">
            <div className="footer-contact-icon"><i className="fa fa-fax"></i></div>
            <div className="footer-contact-text">
              <p><a href="fax:+012-3456-789">7993193339;</a></p>
            </div>
            <div className="clr"></div>
          </div>

           <div className="footer-contact-box">
            <div className="footer-contact-icon"><i className="fa fa-envelope"></i></div>
            <div className="footer-contact-text">
              <p><a href="mailto:ananyaengineers@rediffmail.com">ananyaengineers@rediffmail.com</a></p>
            </div>
            <div className="clr"></div>
          </div>

           <div className="footer-contact-box">
            <div className="footer-contact-icon"><i className="fa fa-globe"></i></div>
            <div className="footer-contact-text">
            <p><a href="mailto:y.armaranth@gmail.com">y.armaranth@gmail.com</a></p>
            </div>
            <div className="clr"></div>
          </div>


          </div>

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer-section-two">
            <div className="footer-heading"><h2>Quick Link</h2></div>
            <div className="footer-link">
              <ul>
              <NavLink to='/'> <li> Home</li></NavLink>
             <NavLink to='/about'>  <li> About</li></NavLink>
            <NavLink to='/Projects'><li> Projects</li></NavLink>
          <NavLink to='/contactUs'><li> Contact Us</li></NavLink>
                       
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="footer-section-two">
            <div className="footer-heading"><h2>Our Services</h2></div>
             <div className="footer-link">
              <ul>
                
                


                    <li><a href="#">Plots</a></li>
                     <li><a href="#">Apartments</a></li>
                      <li><a href="#">Villas</a></li>
                       <li><a href="#">Commercial Complex</a></li>
                       
              </ul>
            </div>
          </div>
        </div>
    
    </div>  
    <div className="truckAnimation">
    <div class="truck">
          <div class="body">
            <div class="front">
              <div class="roof"></div>
              <div class="window"></div>
            </div>
            <div class="back">
              <div class="stand"></div>
              <div class="silencer"></div>
            </div>
            <div class="wheels"></div>
            <div class="hydraulic"></div>
            <div class="tool-box"></div>
            <div class="main">
              <div class="top-cog">
                <div class="top-cog-a"></div>
                <div class="top-cog-b"></div>
                <div class="top-cog-c"></div>
                <div class="hydraulic-piston"></div>
                
              </div>
              <div class="box">
                <div class="window"></div>
              </div>
            </div>

            <div class="hanging">
              
              <div class="rope"></div>              
                <div class="tbl">                 
                  <div class="tbl-row">
                   <div class="tbl-cell"><a href="https://www.facebook.com/amarnath.yerramala" target="_blank"><i class="fa fa-facebook"></i></a></div>                 
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
<div className="footer-bottom">
<div className="row">
   <div className="mycompanyname">
     <p className="text-white">©Copyright 2009-2020 . All rights reserved | Design by
			<a href="http://www.trinetrawebtechnologies.com"> TrinetraWebTechnologies</a>
		 </p>
      </div>
     <div className="col-lg-12 col-md-12 col-sm-12">
       <p>&copy;Copyright 2019 Ananya Engineers  All Rights Reserved</p>
     </div>
    </div>
 </div>


  </div>
</div>
</div>

)
export default Footer;









