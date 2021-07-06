import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useLoading, BallTriangle, Bars } from "@agney/react-loading";
function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="80" />,
    loaderProps: {
      valueText: 'Please wait...',
      style:{color: 'rgba(14, 73, 152, 1)'}
    }
  
  });
  return (
    // <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",}}>
    //   <Spinner animation="border" variant="info" role="status">
    //     <span className="sr-only">Loading...</span>
    //   </Spinner>

    // </div>
    <section {...containerProps} className="w-200px bordered d-flex justify-content-center align-items-center" style={{height: "100vh"}}>{indicatorEl}</section>
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
  );
}

export default Loading;
