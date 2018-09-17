import React, { Component } from 'react'
import Name from '../components/Name/nametitle'
import Overlay from '../helpers/OverLay/overLay'
import About from '../components/About Me/about'
import picture from './profile_fiverr.png';
import picture2 from './profile.jpg';
import './layout.css';
class LayOut extends Component {
    state = {
        introductions: [
            {
                topTitle: 'Get Personal',
                bottomList:[
                    'How I Started',
                    'My Hobbies',
                    'My Band',
                    'Where I Want To Be'
                ]
            },
            {
                topTitle: 'See My Work',
                bottomList:[
                    'My Github',
                    'What Skills Do I Have',
                    'Projects I Worked On',
                    'Resume'

                ]
            },
            {
                topTitle: 'My Experiences',
                bottomList:[
                    'Where I Work',
                    'What I Do',
                    'Where I Intern',
                    'Collaborate ?'
                ]
            }
        ]
    }

    render() {

        const introductions = (<div  className="introduction-flex-display">
            {this.state.introductions.map(eachIntroduction =>
                <Overlay  key ={eachIntroduction.topTitle} classes="introduction-flex-item" {...eachIntroduction} />)
            }
        </div>
        )
        return (
            <div>
                <Name />
                <div className="picture-container">
                <img className="picture" src= {picture} alt="test" />
                <img className="picture" src= {picture2} alt="test2"/>
                </div>
                {introductions}
            </div >

        )
    }
}
export default LayOut;