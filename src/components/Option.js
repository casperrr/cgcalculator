import React from 'react';
import './Option.css';
import {Dropdown} from './Dropdown.js';

class Option extends React.Component {
    render(){
        return(
            <div className='option_container'>
                <p>{this.props.note ? this.props.note : "Option with undefined name"}</p>
                <Dropdown></Dropdown>
            </div>
        )
    }
}

export { Option };