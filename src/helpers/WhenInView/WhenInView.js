import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
    state = {
        isInView: false

    }
    onEnter({previousPosition}){
        if(previousPosition == Waypoint.below){
            this.setState({
                isInView:true
            })
        }
    }
    render() {
        return (
            <div>
                <WayPoint onEnter={this.onEnter}></WayPoint>
                {this.props.children({isInView:this.state.isInView})}
            </div>
        )
    }
}
export default WhenInView;