import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",}}>
      <Spinner animation="border" variant="info" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

    </div>
  );
}

export function MiniLoading() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="grow" variant="info" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

    </div>
    </div>
  )
}

export default Loading;
