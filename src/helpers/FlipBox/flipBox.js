import React from 'react';
import './flipBox.css';
const FlipBox = (props) => {
    const newClass ="flip-index-" + props.index;
    const classes = [props.class,newClass];
    return (
        <div className={classes.join(" ")}>
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