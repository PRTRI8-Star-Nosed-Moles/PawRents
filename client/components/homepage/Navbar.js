import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className = "navBar">
      <div className="logoContainer">
        <img src="https://cdn.discordapp.com/attachments/1024155635899707454/1028362779448590416/Untitled_Artwork_2.png" className="logoImg"/>
        {/* <span className="logoText">pawrents</span> */}
      </div>
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
  
