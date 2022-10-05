import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
          <div className = "navBar">
            <ul>
              <li>
                <Link to="/" id= "navLink">Home</Link>
              </li>
              <li>
                <Link to="/Marketplace" id= "navLink">Marketplace</Link>
              </li>
              <li>
                <Link to="/Account" id= "navLink">Account</Link>
              </li>
            </ul>
          </div>
    )
  }
  
// export default Navbar;