import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
          <div className = "navBar">

            <div id = 'navLeft'>
              <ul>
                <Link to="/" id= "navLink">Home</Link>
              </ul>
            </div>

            <div id = "navRight">
              <ul>
                <Link to="/Marketplace" id= "navLink">Marketplace</Link>
                <Link to="/Account" id= "navLink">Account</Link>
              </ul>
            </div>

          </div>
    )
  }
  
// export default Navbar;