import React from 'react';
import './flipBox.css';
const FlipBox = (props) => {

    return (
        <div className={props.class}>
        <div  className="flip-container">
            <div className="card-flip">
                <div className="card-front">
                <h1>{props.front.frontTitle}</h1>
                </div>
                <div className="card-back">
               
                </div>
            </div>
        </div>
        </div>
    )
}
export default FlipBox;