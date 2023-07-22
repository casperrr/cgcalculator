import React from 'react';
import './Option.css';

class Dropdown extends React.Component {
    render(){
        
        return(
            <>
                <select className='dropdown'>
                    <option>
                        test
                    </option>
                </select>
            </>
        )
    }
}

export {Dropdown};