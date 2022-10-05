import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Login = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [invalidLogin, setInvalidLogin] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
          const response = await fetch('/api/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          })
          const data = await response.json()
          if (data.status === true) {
            navigate('/marketplace', {state: {username: formData.username}})
          } else {
            setInvalidLogin('invalid')
          }
        } catch(err) {
          console.log(err)
        }
        
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
          <h4>Login</h4>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                required onChange={changeUsername}
                value={formData.username}
                name="username"
                placeholder = "username"
                className = "formInput"
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
                className = "formInput"
              />
            </label>
            <p></p>
            <input
              type="submit"
              value="SUBMIT"
              className="buttonStyles"
            />
          </form>
          {invalidLogin === 'invalid' ? <p>Username and password invalid</p> : ''}
        </div>
    )
}