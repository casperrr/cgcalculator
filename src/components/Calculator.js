import React from 'react';
import './Calculator.css';
import { Option } from './Option.js';

class Calculator extends React.Component {
    render() {
        return (
            <div className='calculator_container'>
                <h2 className='calculator_title'>Cost Calculator:</h2>
                <div className='input_container'>
                    <Option note="This is an option"/>
                    <Option />
                    <Option />
                </div>
            </div>
        )
    }
}

export { Calculator };