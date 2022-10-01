import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {

    const [userData, setNewUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        zipcode: '',
        password: '',
        password2: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // //add fetch to check pswd and username
        const data = await fetch('/api/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        const response = await data.json()
        console.log(response)
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
            <h4>Signup</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="type"
                        name="firstName"
                        value={userData.firstName}
                        onChange={changeFirstName}
                    ></input>
                </label>
                <p></p>
                <label>
                    Last Name:
                    <input 
                        type="type"
                        name="lastName"
                        value={userData.lastName}
                        onChange={changeLastName}
                    ></input>
                </label>
                <p></p>
                <label>
                    Username:
                    <input 
                        type="type"
                        name="username"
                        value={userData.username}
                        onChange={changeUsername}
                    ></input>
                </label>
                <p></p>
                <label>
                    Email:
                    <input 
                        type="type"
                        name="email"
                        value={userData.email}
                        onChange={changeEmail}
                    ></input>
                </label>
                <p></p>
                <label>
                    Zip Code:
                    <input 
                        type="type"
                        name="zipcode"
                        value={userData.zipcode}
                        onChange={changeZipcode}
                    ></input>
                </label>
                <p></p>
                <label>
                    Password:
                    <input 
                        type="type"
                        name="password"
                        value={userData.password}
                        onChange={changePassword}
                    ></input>
                </label>
                {userData.password !== userData.password2 ? <p style={{color: 'red'}}>Passwords must match</p> : ""}
                <p></p>
                <label>
                    Verify Password:
                    <input 
                        type="type"
                        name="password2"
                        value={userData.password2}
                        onChange={changePassword2}
                    ></input>
                </label>
                <p></p>
                <input type="submit" />



            </form>
            <label>
              
              <input type="checkbox"/>
              Agree to terms and conditions
            </label>

            <Link to="/">Login</Link>
        </div>
    )
}