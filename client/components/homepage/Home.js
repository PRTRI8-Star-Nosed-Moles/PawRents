import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Login } from './Login';
import { Signup } from './Signup';

export const Home = () => {

  const [loginSignup, setLoginSignup] = useState('login')

  const condition = () => {
    loginSignup === 'login' ? setLoginSignup('signup') : setLoginSignup('login')
  }
 
    return (
        <div className = "loginForm"> 
          {loginSignup === 'login' ? <Login /> : <Signup />}
          
          <button
            className = "buttonStyles"
            onClick={condition}
          >
            {loginSignup === 'login' ? 'SIGN UP' : 'LOGIN'}
          </button>
        </div>
         
    )
}