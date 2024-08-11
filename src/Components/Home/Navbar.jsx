import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Alumni Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Gallery">Gallery</a>
              </li>
              
              <li className="nav-item">
              <a className="nav-link" href="/Unievents">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/scholarships">Scholarships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">Contact US</a>
              </li>
            </ul>
            <div className="d-flex">
             <Link to="/signin"><button type="button" className="btn btn-secondary me-2">Sign in</button></Link> 
              <Link to="/signup"><button type="button" className="btn btn-secondary">Sign up</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
