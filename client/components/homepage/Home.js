import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Login } from './Login';
import { Signup } from './Signup';

export const Home = () => {
  //switch between sign in and log in component
  const [loginSignup, setLoginSignup] = useState('login')

  //change login vs signup state on button click
  const condition = () => {
    loginSignup === 'login' ? setLoginSignup('signup') : setLoginSignup('login')
  }
 
    return (         
        <div className = "splashContainer">
          <div className="logoLoginContainer">
            <div className="logoContainer">
              <img src="https://media.discordapp.net/attachments/1024155635899707454/1028363650383237160/Untitled_Artwork_3.png?width=938&height=936" className="logoHome"/>
            </div>
            <div className = "loginForm"> 
              {loginSignup === 'login' ? <Login /> : <Signup />}
              
              <button
                className = "buttonStyles"
                onClick={condition}
              >
              {loginSignup === 'login' ? 'sign up' : 'log in'}
              </button>
            </div>
          </div>
        </div>     
    )
}