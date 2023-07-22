import React from 'react';
import './Calculator.css';
import { Option } from './Option.js';
import { Output } from './Output.js';

const testOptions = [
    "option 1",
    "option 2",
    "option 3"
];




class Options{
    constructor(note, type, options){
        this.note = note;
        this.type = type;
        if(options){
            this.options = options;
        }
    }
}

const selections = {

    options:[
        new Option("Do you need a full windows desktop?","drop",["Full windows desktop.","Web applications only"]),
        new Option("user needs BYOD device?","drop",["yes","no","Reminder use a different component for this"]),
        new Option("THIS IS AN OPTION FOR TESTING!","drop",["1","2","3","4","5"]),
    ]


};


class Calculator extends React.Component {
    render() {
        // console.log(selections);
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
                    {selections.options.map((option, index)=> <Option key={index} note={option.note} type={option.type} options={option.options}/>)}
                </div>
                <Output />
            </div>
        )
    }
}


export { Calculator };