import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Rounds = React.lazy(() => import("../pages/Rounds.jsx"));

const NotFound = () => {
  const params = useParams();
  
  useEffect(() => {
    document.title = "Error catched";
  });

  return (
    <>
      <Rounds />
      <div className="register d-flex justify-content-center align-items-center position-absolute">
        <div className="container text-center p-5">
          <h1 className="text-danger">"/{params.pageName}"</h1>
          <h3 className="card-text fs-4">Page not found</h3>
          <i className='f'>Oops, We have a problem!</i> <br />
          <Link to="/"><button className="btn btn-success w-100 mt-3">Reload this page</button></Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;