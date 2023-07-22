import React from 'react';
import './Option.css';

class Option extends React.Component {
    render(){
        return(
            <div className='option_container'>
                <p>{this.props.note ? this.props.note : "Option with undefined name"}</p>
            </div>
        )
    }
}

export { Option };