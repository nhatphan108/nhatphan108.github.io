import React, { Component } from 'react';
import FlipBox from '../components/FlipBox/flipBox';
import Name from '../components/Name/nametitle';
import Links from '../components/Links/Links';
import Overlay from '../components/OverLay/overLay';
import './layout.css';
class LayOut extends Component {
    state = {
        introductions: [
            {
                topTitle: 'Get Personal',
                bottomList:[
                    'How I Started',
                    'My Checklist Before 30',
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
                    'Collaborate ?'

                ]
            },
            {
                topTitle: 'My Experiences',
                bottomList:[
                    'Where I Work',
                    'What I Do',
                    'Where I Intern',
                    'How experienced I was when I applied'
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
                {introductions}
            </div >

        )
    }
}
export default LayOut;