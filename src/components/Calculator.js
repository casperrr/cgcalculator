import React from 'react';
import './Calculator.css';
import { Option } from './Option.js';

const testOptions = [
    "option 1",
    "option 2",
    "option 3"
];

class Calculator extends React.Component {
    render() {
        return (
            <div className='calculator_container'>
                <h2 className='calculator_title'>Cost Calculator:</h2>
                <div className='input_container'>
                    <Option note="This is an option" options={testOptions}/>
                    <Option />
                    <Option />
                </div>
            </div>
        )
    }
}

export { Calculator };