import React,{useState} from 'react';
import Loader from './Loader';

function Navbarcomponent() {


  return (
    <>
  <Loader></Loader>
  <div className='sticky-top'>

      <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>ML ECG MONITOR</h3>
            <p>A better Way to Track your Health and Generate Report </p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >

      <ul className="navbar-nav mr-auto">

      </ul>

        <a class="nav-link btn btn-outline-info mr-2" herf="/">Downloads </a>

        </div>
      </nav>
    </div>

    </>
  );
}

export default Navbarcomponent