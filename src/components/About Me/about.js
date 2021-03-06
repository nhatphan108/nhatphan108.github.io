import React, { Component } from 'react';
import FlipBox from '../../helpers/FlipBox/flipBox';
import Sectiontitle from '../../helpers//SectionTitle/SectionTitle';
import './about.css';
class About extends Component {
    state = {
        flipboxes: [
            {
                front: {
                    frontTitle: "Jiujitsu"
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
                    frontTitle: "Stutter"
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
                {this.state.flipboxes.map((eachBox,index) =>
                    <FlipBox class="about-flex-item" index={index} key={eachBox.frontTitle} {...eachBox} />
                )}
            </div>
            </div>
        )
        return (
            <div>
                <Sectiontitle title="About Me" />
                {flipBoxes}
            </div>
        )
    }
}
export default About;