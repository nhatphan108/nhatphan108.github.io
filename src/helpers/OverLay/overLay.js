import React, { Component } from 'react';
import './overlay.css';
import FontAwesome from 'react-fontawesome';
class LayOver extends Component {
    state = {
        active: false
    }
    toggleState() {
        this.setState(prevState => ({
            active: !prevState.active
        })
        )
    }
    

    render() {
        const firstLayerClasses=["layover-first-layer"]
        const secondLayerClasses=["layover-second-layer"]
        if(this.state.active){
            firstLayerClasses.push("layover-first-layer-clicked")
            secondLayerClasses.push("layover-second-layer-clicked")
        }
        return (
            <div className={this.props.classes}>
                <div className="layover-container">
                    <div className={firstLayerClasses.join(" ")} onClick={this.toggleState.bind(this)}>
                        <h1>{this.props.topTitle}</h1>
                    </div>
                    <div className={secondLayerClasses.join(" ")}>
                        <ul>

                            {this.props.bottomList.map(eachElement => <li>{eachElement}</li>)}
                        </ul>
                        <div class="arrow-animation">
                            <a href="#">&#8595;</a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default LayOver;