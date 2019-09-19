import React,{Component} from 'react'
import './currentproject.css'
import UnderConstruction from'../underConstruction/underConstruction.js'
import Pdf from "./../assets/Brochure.pdf";
import rooftopswimingpool from './../assets/rooftopswimingpool.jpg'
import fitnesscenter from './../assets/fitnesscenter.jpg'
import rooftopgarden from './../assets/rooftopgarden.jpg'
import cccamera from './../assets/cccamera.jpg'
import Navigation from '../navigation/navigation.js'
import Footer from '../footer/footer.js'

 class CurrentProject extends Component{
  onBrochureClick() {
    window.open(Pdf);
  }
 
 render(){
   return(
<div>   
<Navigation/>
    

   
   
   <UnderConstruction/>
<div className="row">
  <div className="column">
    <div className="card">
    
      <div className="container">
        <h2>TYPE 1</h2>
       <h3 className="title">Super Built Up</h3>
        <h3 className="title">AreaSize-1223Sft</h3>
        <h3 className="title">1square feet-Price:-Rs:2800/-</h3>
        <h3 className="title">Price(Rs-2800/-) X AreaSize(1223Sft)</h3>
        <h3 className="title">Total Price:-Rs:34,24,400/-</h3>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
  
      <div className="container">
        <h2>Type 2</h2>
        <h3 className="title">Super Built Up</h3>
        <h3 className="title">AreaSize-1182Sft</h3>
        <h3 className="title">1square feet-Price:-Rs:2800/-</h3>
        <h3 className="title">Price(Rs-2800/-) X AreaSize(1182Sft)</h3>
        <h3 className="title">Total Price:-Rs:33,09,600/-</h3>
        
       
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
  
      <div className="container">
        <h2>Type 3</h2>
        <h3  className="title">Super Built Up</h3>
        <h3  className="title">AreaSize-1238Sft</h3>
        <h3  className="title">1square feet-Price:-Rs:2800/-</h3>
        <h3  className="title">Price(Rs-2800/-) X AreaSize(1238Sft)</h3>
        <h3  className="title">Total Price:-Rs:34,66,400/-</h3>
      
      </div>
    </div>
  </div>
</div>
<section className="single-room">
<div classNameName="single-room-images">
   


<div className="single-room-info">
    <article className="desc">
        <h1>Details</h1>
        <h5>NATURE AND LUXURY LOCATION:Your about to enter an elevate world.Its is a world being crafted especially for you i one of the most promising localities.Adjecent to NH44,few minutes away from Central Park,Shilparamam,Thapovanam Circle,Delhi Public School.it is an inivition to experience the magic that Spiritual,Nature and luxury location can conjure together.the many pleasures of living in Ananya Elite awaits you.</h5>
    </article>
    <div className="fileDownload">
<h2>Here you can download Brochure in PDF format</h2>
<div onClick={this.onBrochureClick}>
     <button>Download</button>
   </div>
</div>
</div>
</div>
</section>
<section className="room-extras"><br/>

    <h1>Highlights of the project</h1>

    <h3>>All flats are East facing</h3>
    <h3>>Two lifts and two staircases</h3>
    <h3>>Wide corridors</h3>
    <h3>>Vasthu compliant</h3>
    <h3>>open to sky space between all adjacent flats</h3>
    <h3>>No common walls</h3>
    <h3>>24-hr warter supply</h3>
    <h3>>Sufficient ground water</h3>
    <h3>>Power backup fo lifts and common areas</h3>
    <h3>>Automation</h3>
    <h3>>24-hr security with CCTV</h3>
    <h3>>Strategic location</h3>
    <h3>>Premium quality construction</h3>
    <h3>>Rain water harvesting</h3>
    <h3>>Security/room</h3>
    <h3>>Designed compound wall</h3><br/>
      </section>
      


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
      <img src={rooftopswimingpool} alt="Cinque Terre" width="600" height="400"/>
    </a>
    <div className="desc"><h3>RoofTop Swimming Pool</h3></div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src={rooftopgarden} alt="Forest" width="600" height="400"/>
    </a>
    <div className="desc"><h3>RoofTop Garden</h3></div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src={fitnesscenter} alt="Northern Lights" width="600" height="400"/>
    </a>
    <div className="desc"><h3>Fitness Center</h3></div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src={cccamera} alt="Mountains" width="600" height="400"/>
    </a>
    <div className="desc"><h3>24-hr security with CCTV</h3></div>
  </div>
</div>

<h2><strong>NOTE:-</strong>Images are for reference there will be changes in actual construction as per site requirements.</h2> 
<Footer/>
</div> 

 )}
}
export default CurrentProject;



