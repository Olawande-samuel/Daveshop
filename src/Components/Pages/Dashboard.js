import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Protected Component</h1>
    </div>
  );
}

export default Dashboard;
