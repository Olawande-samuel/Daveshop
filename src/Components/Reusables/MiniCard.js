import React from "react";

function MiniCard({ miniLogo, miniTitle }) {
  return (
    <div className="mini-card-content">
      <div className="mini-card-logo">
        <div className="mini-logo-wrapper">
          <i>{miniLogo}</i>
        </div>
      </div>
      <p>{miniTitle}</p>
    </div>
  );
}

export default MiniCard;
