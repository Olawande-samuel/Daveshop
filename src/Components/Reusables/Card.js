import React from 'react'

function card({cardLogo, cardTitle, details}) {
    return (
        <div>
            <div className="card">
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
