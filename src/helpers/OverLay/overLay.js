import React from 'react';
import './overlay.css';
import FontAwesome from 'react-fontawesome';
const LayOver = (props) => {
    return (
        <div className={props.classes}>
            <div className="layover-container">
                <div className="layover-first-layer">
                    <h1>{props.topTitle}</h1>
                </div>
                <div className="layover-second-layer">
                    <ul>
                    
                        {props.bottomList.map(eachElement => <li>{eachElement}</li>)}
                    </ul>
                    <div class="arrow-animation">
                    <a href="#">&#8595;</a>
                    </div>
                </div>
              
            </div>
        </div>

    )
}
export default LayOver;