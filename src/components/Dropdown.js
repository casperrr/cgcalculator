import React from 'react';
import './Option.css';

class Dropdown extends React.Component {
    render(){
        
        return(
            <>
                <select className='dropdown' label='hello'>
                    {this.props.children.map((option)=> 
                        <option>{option}</option>
                    )}
                    
                </select>
            </>
        )
    }
}

export {Dropdown};