import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {

    const navigate = useNavigate()

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
        try {
            const data = await fetch('/api/user', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })
            const response = await data.json()
            console.log(response)
            navigate('/marketplace', {state: {username: response.username}})
        } catch(err) {
            console.log(err)
            alert('Please fill out the required fields.');
        }
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
                </form>
            </div>
            <div>
                <button className="buttonStyles" type="submit">sign up</button>
            </div>
            {/* <Link to="/">Login</Link> */}
        </div>
    )
}