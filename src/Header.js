import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from './video-backgrounds/Logo.png';
import "./App.css";

const Header = () => {
    return (
      <nav className = "navbar navbar-expand-lg navbar-dark">
        <div className = "navbar-brand" 
          style = {{
            cursor: "pointer", //Shows click on hover similar to a button element or a link element
          }}>
            Recipe Rocket
            
        </div>
        <button className = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div //Bootstrap class is more targeted to <a> tag elements but can be used for other types
                >
                <Link style = {{color: "white"}} className="nav-link" to ="/login">Login</Link>
              </div>
            </li>
            <li className="nav-item">
              <div //Bootstrap class is more targeted to <a> tag elements but can be used for other types
                >
                <Link style = {{color: "white"}} className="nav-link" to ="/signup">Sign Up</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  
  

    );
  }

export default Header;