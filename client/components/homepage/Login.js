import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Login = () => {
    //set use navigate to be used after validating user info
    const navigate = useNavigate()
    //collects data from login form
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    // set state of login validity
    const [invalidLogin, setInvalidLogin] = useState('')

    //form submit function that sends login info to backend
    const handleSubmit = async (e) => {
      console.log('inside Login - handleSubmit')
      e.preventDefault();

      try {
        const response = await fetch('/api/login', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        //if login validated redirect to marketplace and set username in session storage
        if (data.status === true) {
          sessionStorage.setItem('username', formData.username)
          navigate('/marketplace')
        } else {
          setInvalidLogin('invalid')
        }
      } catch(err) {
        console.log(err)
      }
      //reset form data
      setFormData({
          username: '',
          password: ''
      })
    }

    //onchange function for username input
    const changeUsername = (e) => {
      setFormData({
        ...formData,
        username: e.target.value
      })
      console.log(formData)
    }
    //onchange function for password input
    const changePassword = (e) => {
        setFormData({
            ...formData,
            password: e.target.value
        })
    }

    return (
        <div id="login">
          <h4>Login</h4>
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <input
                type="text"
                required onChange={changeUsername}
                value={formData.username}
                name="username"
                placeholder = "username"
                className = "searchInput"
              />
            </label>
            <p></p>
            <label>
              <input
                type="password" required
                onChange={changePassword}
                value={formData.password}
                name="password"
                placeholder = "password"
                className = "searchInput"
              />
            </label>
            <p></p>
            <button
              type="submit" 
              className="buttonStyles"
            >
              log in
            </button>
          </form>
          <div>
          {invalidLogin === 'invalid' ? <p>Username and password invalid</p> : ''}
          </div>
        </div>
    )
}