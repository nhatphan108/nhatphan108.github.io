import React from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const SectionTitle = (props) =>
 {
    return (
        <div>
        <h1 class="section-title"> {props.title} </h1>
        </div>
    )
}
export default SectionTitle;