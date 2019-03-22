import React from 'react';
import Scrollchor from 'react-scrollchor';

const Navbar = () => {
    return (
      <div className="sticktop">
        {/* Nav bar */}
        <nav className="navbar navbar-expand-md navbar-light navcolor sticky-top">
          <div className="container-fluid">
            <a href="#Home" className="navbar-brand test-jquery"><img src="https://theshortcut.org/wp-content/uploads/2017/03/Shortcut_logo_RGB_white.png" className="icon-logo" alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navcolor" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <Scrollchor to="#Home" animate={{offset: -150, duration: 600}} className="nav-text">Home</Scrollchor>
                </li>
                <li className="nav-item">
                    <Scrollchor to="#About" animate={{offset: -150, duration: 600}} className="nav-text">About</Scrollchor>
                </li>
                <li className="nav-item">
                   <Scrollchor to="#Contact" animate={{offset: -50, duration: 600}} className="nav-text">Contact</Scrollchor>
                </li>
                <li className="nav-item">
                  <Scrollchor to="#Signup" animate={{offset: -50, duration: 600}} className="nav-text">Sign up</Scrollchor>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* ////////////////////////////////////////////////////////////// */}
      </div>
    );
  }


export default Navbar;
