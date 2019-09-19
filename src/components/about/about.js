import React from 'react'
import './about.css'
import imgabout from './../assets/About-US.png'

const AboutUs = () => (
            <div> 
             <div className="about-img">
             <img src={imgabout}/>
            </div>
    



    
    <div className="about">
        <div className="row">
            <div className="column-66">
           
                <h1 className="xlarge-font"><b>About Us</b></h1>
                <div className="column-5">
                <p>"Ananya Engineers is a Civil and Structural Engineer firm provide services related to: Approvals: Panchaity, Municipality, AHUDA. Planning: Apartments, Individual houses, Industrial Buildings, Educational, Hospital etc. Structural Designs: All type of structures including RCC and Steel Structures. Land Surveying. Elevations. Interior Designs."</p>
                    <p>Every successful project is a by-product of our hard work and determination gained by the trust and satisfaction of our customers.<br/> Ananya Engineers  has evolved into Ananya ELITE with more potential to acquire successful projects within cities as well for a rapid growth of the organization. Since 2009 ANANYA has been providing various services and helping people to fulfil their dream of construction.
                    
                    Head Quartered in Anantapur, Ananya is one of the best construction companies with 10 years of experience.</p>
                  
                </div>
                </div>
        </div>


        <div className="container" styles="background-color:#f1f1f1">
            <div className="row">
                <div className="column-33">
                    <img src={imgabout}/>
                </div>
                <div className="column-66">
                    <h1 className="xlarge-font"><b>Mr. AMARANATH.Y</b></h1>
                    <h1 className="large-font" styles="color:red;"><b>Chairman & Managing Director</b></h1>
                    <p><span styles="font-size:24px" />

                        Having a unique experience in the real estate field for the last ten years, Mr. Y. Amaranath has accomplished the level of professionalism. He has earned lakhs of customer’s satisfaction with his enormous services by providing them with a golden chance of establishing their own houses through Ananya. His down to earth nature made him stand as a brand in the market and fetched an extensive success through many projects and has become a role model for many people.
                        
                        Ananya's focus is to facilitate and allocate a dream house for all the families who believed and encouraged Ananya for their bright future. This place has admired and embraced Ananya just because of Amaranath’s hard work, determination and marketing knowledge towards commercial, retail and multifamily properties that consistently exceed the investment goals of his clients.
                        
It has become an exceptional source for the customers/clients with Amaranath’s specific areas of expertise which includes strategic planning, space utilization, transaction management and financial structuring.</p>

                </div>
            </div>
        </div>

        </div>
    </div>
)
export default AboutUs;








