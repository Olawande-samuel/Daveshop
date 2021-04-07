import React from "react";

function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center border"
      style={{ height: "100vh" }}
    >
      <div className="content">
        <h1 className="text-center mt-6 text-secondary">Error</h1>
        <h2 className="text-center mt-6 text-secondary">Not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;
