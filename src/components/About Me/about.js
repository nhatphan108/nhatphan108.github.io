import React, { Component } from 'react';
import FlipBox from '../../helpers/FlipBox/flipBox';
import Sectiontitle from '../../helpers//SectionTitle/SectionTitle';
import './about.css';
class About extends Component {
    state = {
        flipboxes: [
            {
                front: {
                    frontTitle: "Martial Art"
                },
                back: {

                }
            },
            {
                front: {
                    frontTitle: "Music"
                },
                back: {

                }
            },
            {
                front: {
                    frontTitle: "Coding"
                },
                back: {

                }
            },
            {
                front: {
                    frontTitle: "Life"
                },
                back: {

                }
            }
        ]
    }
    render() {
      
        const flipBoxes = (
            <div class="about-us">
            <div class="about-flex-container">
                <h1 class="about-us-title"> Bucket List Before 30 </h1>
                {this.state.flipboxes.map((eachBox,index) =>
                    <FlipBox class="about-flex-item" index={index} key={eachBox.frontTitle} {...eachBox} />
                )}
            </div>
            </div>
        )
        return (
            <div>
                {flipBoxes}
            </div>
        )
    }
}
export default About;