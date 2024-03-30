import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const portal = useHistory();
  // eslint-disable-next-line
  const [ pageLoading, setPageLoading ] = useState(false);

  const logOut = () => {
    setPageLoading(true);
    alert("You Logged Out");
    portal.push("/login");
    setPageLoading(false);
  };

  return (
      <nav className="navbar p-1 border-bottom d-flex">
        <h3 role="button">YELP CLONE</h3>
        <div className="d-flex">
                <button onClick={logOut} className="btn btn-danger">Log Out</button>
        </div>
      </nav>
  );
};

export default Navbar;