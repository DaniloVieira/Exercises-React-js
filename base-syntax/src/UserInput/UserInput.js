import React from 'react';

const userInput = (props) => {
    const labelStyle = {
        'padding-right': '8px',
        'font-weight': 'bold'
    }
    return (
        <div className='Center Card'>
            <label style={labelStyle} for='userInput'>User input</label>
            <input id='userInput' type='text' onChange={props.change} value={props.userName} style={props.style}></input>
        </div>
    );

}

export default userInput;