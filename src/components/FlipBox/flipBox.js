import React from 'react';
import './flipBox.css';
const FlipBox = (props) => {
    return (
        <div className="flip-container">
            <div className="card-flip">
                <div className="card-front">
                {props.frontTitle}
                </div>
                <div className="card-back">
                {props.backTitle}
                </div>
            </div>
        </div>
    )
}
export default FlipBox;