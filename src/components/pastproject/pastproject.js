import React from 'react'
import './pastproject.css'
import past1 from './../assets/past1.jpg'
import past2 from './../assets/past2.jpg'
import past3 from './../assets/past3.jpg'
import past4 from './../assets/past4.jpg'
import past5 from './../assets/past5.jpg'
import past6 from './../assets/past6.jpg'
import Navigation from '../navigation/navigation.js'
import Footer from '../footer/footer.js'
import TimeLine from '../timeline/timeline.js'
const PastProject=()=>(
    <div>
        <Navigation/>
       
    <p className="heading">Past Projects</p>
    <div className="gallery-image">
      <div className="img-box">
        <img src={past1} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Library</p>
            <p className="opacity-low">Architect Design</p>
          </div>
        </div> 
      </div>
      <div className="img-box">
      <img src={past2} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Night Sky</p>
            <p className="opacity-low">Cinematic</p>
          </div>
        </div>
      </div>
      <div className="img-box">
      <img src={past3} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Tea Talk</p>
            <p className="opacity-low">Composite</p>
          </div>
        </div>
      </div>
      <div className="img-box">
      <img src={past4} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Road</p>
            <p className="opacity-low">Landscape</p>
          </div>
        </div> 
      </div>
      <div className="img-box">
      <img src={past5} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Sea</p>
            <p className="opacity-low">Cityscape</p>
          </div>
        </div> 
      </div>
      <div className="img-box">
      <img src={past6} alt="" />
        <div className="transparent-box">
          <div className="caption">
            <p>Vintage</p>
            <p className="opacity-low">Cinematic</p>
          </div>
        </div> 
      </div>
    </div>

    <TimeLine/>

    <Footer/>
    </div>
)
export default PastProject;