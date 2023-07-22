import React from 'react';
import './Option.css';

class Dropdown extends React.Component {
    render(){
        
        return(
            <>
                <select className='dropdown' label='hello'>
                    {this.props.children.map((option, index)=> 
                        <option key={index}>{option}</option>
                    )}
                </select>
            </>
        )
    }
}

export {Dropdown};