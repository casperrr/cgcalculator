import React from 'react';
import './Calculator.css';
import { Option } from './Option.js';
import { Output } from './Output.js';

const testOptions = [
    "option 1",
    "option 2",
    "option 3"
];


const selections = {
    options:[
        this.createOption("Do you need a full windows desktop?",["Full windows desktop.","Web applications only"]),
        this.createOption("user needs BYOD device?",["yes","no","Reminder use a different component for this"]),
        this.createOption("THIS IS AN OPTION FOR TESTING!",["1","2","3","4","5"])
    ],

    createOption(note, options){
        return({note:note,options:options});
    },
};

class Calculator extends React.Component {
    render() {
        return (
            <div className='calculator_container'>
                <h2 className='calculator_title'>Cost Calculator:</h2>
                <div className='input_container'>
                    {/*
                    Place options in here with <Option /> tag.
                    Use "note" for the display name of the option.
                    use "options" to pass in an array of options.
                    */}
                    <Option note="This is an option" options={testOptions}/>
                    <Option />
                    <Option />
                </div>
                <Output />
            </div>
        )
    }
}

export { Calculator };