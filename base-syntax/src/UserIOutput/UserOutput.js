import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='Center Card'>
            <p>{props.userName}</p>
            <p>{props.userAge}</p>
        </div>
    );

}

export default userOutput;