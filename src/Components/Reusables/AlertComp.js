import React from 'react';
import Alert from "react-bootstrap/Alert"

function AlertComp({variant, alertText}) {
    return (
        <>
        <Alert variant={variant} >
           {alertText}
        </Alert>
        </>
    )
}

export default AlertComp
