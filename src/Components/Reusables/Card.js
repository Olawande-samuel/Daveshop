import React from 'react'

function card({cardLogo, cardTitle, details}) {
    return (
        <div className="col-md-4">
            <div className="card d-flex justify-content-start flex-column">
                <div className="card-logo-wrapper">
                    <i>{cardLogo}</i>
                </div>
                <h5>{cardTitle}</h5>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default card
