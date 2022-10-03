import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
      
          <div className='header'>
              <ul>
                <Link to="/" >Logo-Home</Link>
                <Link to="/Marketplace" >Marketplace</Link>
                <Link to="/Account" >Account</Link>
              </ul>
          </div>
     
    )
  }
  
// export default Navbar;