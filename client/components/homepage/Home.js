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
        <div> 
          {loginSignup === 'login' ? <Login /> : <Signup />}
          <button onClick={condition}>{loginSignup === 'login' ? 'Sign Up' : 'Login'}</button>
        </div>
         
    )
}