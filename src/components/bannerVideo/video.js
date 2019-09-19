import React from 'react'
import video from './../assets/video.mp4'

import './video.css'
const Video=()=>(
    <div>
<div className="video-container">
        <video  className="video"  autoplay="true" loop="true" playinline muted >
        <source src={video}
                            type="video/mp4"/>
        </video>
      <div className="companyName">
            <h1><span>A</span><span>N</span><span>A</span><span>N</span><span>Y</span><span>A</span> ENGINEERS</h1>
            <h3><span>Unique Place For Quality Services</span></h3>
      </div>
    </div>
    <div className="box1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    </div>

)
export default Video;