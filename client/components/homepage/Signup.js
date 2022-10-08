import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate()
  //state for all form input data
  const [userData, setNewUser] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      zipcode: '',
      password: '',
      password2: ''
  })

  //on submit function for sign in form
  const handleSubmit = async (e) => {
    console.log('inside Signup - handleSubmit');
    e.preventDefault()
    
    try {
        const data = await fetch('/api/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        const response = await data.json()
        //navigate to marketplace after successful sign up and set username in session storage
        sessionStorage.setItem('username', userData.username)
        navigate('/marketplace')
    } catch(err) {
        console.log(err)
        alert('Please fill out the required fields.');
    }
    //reset sign in form data
    setNewUser({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        zipcode: '',
        password: '',
        password2: ''
    })
  }

  //onchange functions for form
  const changeFirstName = (e) => {
      setNewUser({
          ...userData,
          firstName: e.target.value
      })
  }

  const changeLastName = (e) => {
      setNewUser({
          ...userData,
          lastName: e.target.value
      })
  }

  const changeUsername = (e) => {
      setNewUser({
          ...userData,
          username: e.target.value
      })
  }

  const changeEmail = (e) => {
      setNewUser({
          ...userData,
          email: e.target.value
      })
  }

  const changeZipcode = (e) => {
      setNewUser({
          ...userData,
          zipcode: e.target.value
      })
  }

  const changePassword = (e) => {
      setNewUser({
          ...userData,
          password: e.target.value
      })
  }

  const changePassword2 = (e) => {
      setNewUser({
          ...userData,
          password2: e.target.value
      })
  }

  return (
    <div>
        <div className = "signup-form">
            <h4>Signup</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        onChange={changeFirstName}
                    ></input>
                </div>
                <p></p>
                <div>
                    Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={changeLastName}
                    ></input>
                </div>
                <p></p>
                <div>
                    Username:
                    <input 
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={changeUsername}
                    ></input>
                </div>
                <p></p>
                <div>
                    Email:
                    <input 
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={changeEmail}
                    ></input>
                </div>
                <p></p>
                <div>
                    Zip Code:
                    <input 
                        type="text"
                        name="zipcode"
                        value={userData.zipcode}
                        onChange={changeZipcode}
                    ></input>
                </div>
                <p></p>
                <div>
                    Password:
                    <input 
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={changePassword}
                    ></input>
                </div>
                {userData.password !== userData.password2 ? <p style={{color: 'red'}}>Passwords must match</p> : ""}
                <p></p>
                <div>
                    Verify Password:
                    <input 
                        type="password"
                        name="password2"
                        value={userData.password2}
                        onChange={changePassword2}
                    ></input>
                </div>
                <p></p>
                <div id="terms-checkbox">
                    <input type="checkbox"/>
                    <p>Agree to terms and conditions</p>
                </div>
                <p></p>
                <div className="signupButtonContainer">
                <button type="submit" className="buttonStyles">submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}