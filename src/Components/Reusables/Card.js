import React from 'react'

function card({cardLogo, cardTitle, details, bgColor}) {
    return (
        <div className="col-md-4">
            <div className=" card d-flex justify-content-start flex-column px-5"  style={{background: `${bgColor}`}}>
                <div className="card-logo-wrapper text-center" style={{marginBottom: "23px", marginTop:"17px"}}>
                    <i><img src={cardLogo} alt="" /></i>
                </div>
                <h5 className="text-center" style={{marginBottom: "17px"}}>{cardTitle}</h5>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default card
