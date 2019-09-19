import React from 'react'
import './contact.css'
import locationmap from './../assets/locationmap.jpeg'
import contactimg from './../assets/contact.png'

const ContactUs=()=>(
    <div>
      <div className="contact-img">
        <img src={contactimg}/>
      </div>
<div styles="text-align:center">
<h2 className="xlarge-font"><strong>We would love to hear from you!</strong></h2>
 </div>

     <div className="map">
  <div className="row">
    <div className="column-66">
     <p><span styles="font-size:36px"/>
      <h2><strong>OFFICE ADDRESS:-</strong></h2>
      Address:Ananya Engineers(Reg as Ananya Global Consultants) 
              1 St Floor, Ss Complex, 
              Kamalanagar, 
              Anantapur - 515001, Beside Muthoot Finance - Dcms Road.
      
      </p>
        <p><span styles="font-size:36px"/>
        <h2> <strong>Ananya Elite location</strong></h2>
       <p><strong>NATURE AND LUXURY LOCATION:</strong>Your about to enter an elevated world. It is a world being crafted especially for you in one of the most promising localities. Adjacent to NH44,few minutes away from central park,Shilparamam,Thapovanam Circle,Delhi public school.It is an invitation to experience the magic that spiritual,nature and luxury location can conjure together.Many pleasures of living in Ananya Elite await you.Project address:Priyanaka Nagar,Anantapuram,14.704524,77.594597(Google maps Langitude and Latitude)
      </p>
      </p>
    </div>
    <div className="column-10">
    <iframe className="imgs1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.1977792679218!2d77.59404382919512!3d14.704665999358511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzE2LjgiTiA3N8KwMzUnNDAuNSJF!5e1!3m2!1sen!2sin!4v1568392550093!5m2!1sen!2sin" width="600" height="450" frameborder="0" styles="border:0;" allowfullscreen=""></iframe>
       <img className="imgs2"src={locationmap}/>

    </div>
  </div>
</div>
</div>

)
export default ContactUs;