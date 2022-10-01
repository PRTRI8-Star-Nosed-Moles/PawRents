import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
test

export const Home = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // //add fetch to check pswd and username
        setFormData({
            username: '',
            password: ''
        })
    }

    const changeUsername = (e) => {
      setFormData({
        ...formData,
        username: e.target.value
      })
      console.log(formData)
    }

    const changePassword = (e) => {
        setFormData({
            ...formData,
            password: e.target.value
        })
    }

    return (
        <div>
          <h1>Home</h1>
          <img src="#"/>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" required onChange={changeUsername} value={formData.username} name="username"/>
            </label>
            <p></p>
            <label>
              Password:
              <input type="password" required onChange={changePassword} value={formData.password} name="password"/>
            </label>
            <p></p>
            <input type="submit" value="login" />
          </form>
          <Link to="/signup">Sign up</Link>
        </div>
    )
}