import React from 'react';
import Alert from "react-bootstrap/Alert"

function AlertComp() {
    return (
        <>
        <p>Hello</p>
         {['primary',
         'danger',
        'success'].map((variant, index) => {
             <Alert key={index} variant={variant}>
                 this is an alert

                 <Alert.Link> Click here</Alert.Link>
            </Alert> } 

        )};
        </>
    )
}

export default AlertComp
