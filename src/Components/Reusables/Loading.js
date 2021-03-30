import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center border" style={{height:"100vh",}}>
      <Spinner animation="border" variant="info" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

    </div>
  );
}

export default Loading;
