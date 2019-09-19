import React from 'react'
import './projects.css'
import {NavLink} from 'react-router-dom'

const Project=()=>(
    
    <div>
      
<div class="outline"></div>
<div class="logos">ANANYA ENGINEERS Projects</div>

<div class="title1">
   Current-project
</div>

<div class="morewine1">
<NavLink to="/currentProject" > <button> Open Up</button></NavLink>
</div>


<div class="title2">
 pastproject
</div>

<div class="morewine2">
<NavLink to="/pastproject"> <button>Open Up</button></NavLink>
</div>
   
    </div>
)
export default Project;















