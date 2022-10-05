import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
      
          <div className='header'>
              <ul>
                <Link to="/" >Logo-Home</Link>
                <Link to="/marketplace" >Marketplace</Link>
                <Link to="/account" >Account</Link>
              </ul>
          </div>
     
    )
}
  
