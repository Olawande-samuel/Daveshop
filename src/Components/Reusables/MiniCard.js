import React from "react";

function MiniCard({ miniLogo, miniTitle}) {
  return (
    <div className="mini-card-content" >
      <div className="mini-card-logo">
        <div className="mini-logo-wrapper">
          <img src={miniLogo} alt="random-icon" />
        </div>
      </div>
      <p>{miniTitle}</p>
    </div>
  );
}

export default MiniCard;
