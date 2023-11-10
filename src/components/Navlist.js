import React, { useEffect } from 'react';
import {
    Link, useLocation
   } from "react-router-dom";

const Navlist = () => {
  const location = useLocation();
  useEffect(() => {
    // eslint-disable-next-line
  }, [[location]]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Cloudy Notes</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location?.pathname === "/" ? "active" : ""}`}  aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location?.pathname === "/About" ? "active" : ""}`} to="/About">About</Link>
          </li>
        </ul>
        <Link to="/Login" className="btn btn-primary mx-1"  role="button" aria-disabled="true">Login</Link>
        <Link to="/" className="btn btn-primary mx-1"  role="button" aria-disabled="true">Sign up</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navlist
