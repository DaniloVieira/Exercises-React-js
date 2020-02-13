import React from 'react';



const validationComponent = (props) => {

    let message = null;

    if(props.length > 1){
        if(props.length < 5){
            message = 'Text too short!!!!'
        }
        else if(props.length >= 5){
            message = 'Text long enough!!!'
        }
    }
    
        
    return (
        <p>{message}</p>
    )
}

export default validationComponent