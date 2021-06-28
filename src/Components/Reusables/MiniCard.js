import React from "react";

function MiniCard({ miniLogo, miniTitle,minibg }) {
  return (
    <div className="mini-card-content" style={{background:`${minibg}`}}>
      <div className="mini-card-logo">
        <div className="mini-logo-wrapper">
          <img src={miniLogo} alt="random-icon" />
        </div>
      </div>
      <p className="text- " style={{fontSize:'18px'}}>{miniTitle}</p>
    </div>
  );
}

export default MiniCard;
