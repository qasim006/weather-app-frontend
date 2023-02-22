import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const handleClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/hotAndNot") {
      window.location.reload(); // reload the current page
    } else {
      window.location.href = "/hotAndNot"; // navigate to the /hotAndNot page
    }
  };

  const handleFreezeFleeClick = (event) => {
    event.preventDefault();
    if (location.pathname === "/freezeAndFlee") {
      window.location.reload();
    } else {
      window.location.href = "/freezeAndFlee";
    }
  };

  return (
    <div className="navBarContainer">
      <div className="linkContainer">
        <Link to="/" className="link" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div className="linkContainer">
        <Link
          to="/hotAndNot"
          className="link"
          style={{ textDecoration: "none" }}
          onClick={handleClick}
        >
          HOTnNOT
        </Link>
      </div>
      <div className="linkContainer">
        <Link
          to="/freezeAndFlee"
          className="link"
          style={{ textDecoration: "none" }}
          onClick={handleFreezeFleeClick}
        >
          FREEZEnFLEE
        </Link>
      </div>
    </div>
  );
};

export { NavBar };


