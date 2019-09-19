import React from 'react'
import './customersreview.css'
import review1 from './../assets/comment1.png'
import review2 from './../assets/comments2.png'
import review3 from './../assets/comment3.png'

const CustomersReview=()=>{
return(
    <div>
     <div className="heading">
        <h1>
        Our Clients believe in us.
        </h1> 
        <h4>Here is what a few of them say.</h4>
         
        </div>   
    <div className="carousel">
        <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
                <div className="slide-image">
                <img src={review1}/>
                </div>
                <div className="carousel-controls">
                    <label for="img-3" className="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-2" className="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li className="slide-container">
                <div className="slide-image">
                    <img src={review2}/>
                </div>
                <div className="carousel-controls">
                    <label for="img-1" className="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-3" className="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li className="slide-container">
                <div className="slide-image">
                    <img src={review3}/>
                </div>
                <div className="carousel-controls">
                    <label for="img-2" className="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-1" className="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <div className="carousel-dots">
                <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
            </div>
        </ul>
    </div>
</div>

)
}

export default CustomersReview