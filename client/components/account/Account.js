import React, { useEffect, useState } from "react";
import { AddPet } from "./AddPet";
import { useLocation, useNavigate } from "react-router-dom";
import { YourUserRentalHistory } from "./YourUserRentalHistory";
import { MyPets } from "./MyPets"


export const Account = () => {
  //initializes the useNavigate hook, now you can use navigate() to go to another part of the website
  const navigate = useNavigate();
  
  //if the username is null, then navigate to homepage
  if (sessionStorage.getItem('username') === null) {
    navigate('/')
  }

  //this stores the username of the signed in user under the variable username
  const username = sessionStorage.getItem('username')

  //declaring the state for username's pets
  const [myPets, setMyPets] = useState([])

  //fetch GET's the pets inputted by the username logged in
  //sets the state to be the pets from the database
  const fetchPets = async () => {
    console.log('inside Account - fetchPets');
    try {
      const data = await fetch(`/api/pet/mypets/${username}`, {
        method: "GET"
      });
      const response = await data.json();
      setMyPets(response)
    } catch(err) {
      console.log(err)
    }
  }

  //runs the function fetchPets upon render
  useEffect(() => {
    fetchPets()
  }, [])
  
  //declares state for pets you want to add
  const [petAdd, setPetAdd] = useState(false)

  //if the petAdd state is false then run setPetAdd(true)
  //if the petAdd state is true then setPetAdd(false)

  const changeAdd = () => {
    petAdd === false ? setPetAdd(true) : setPetAdd(false)
  }

  return (
    <div className="account-container">
      <h4>{username}</h4>

      {/* if there is anything in myPets, then map through it so that all the pets render a MyPets component   */}
      <h5>My pets</h5>
      {myPets.length ? myPets.map((pet, i) => <MyPets fetchPets={fetchPets} key={i} obj={pet}/>) : <p id="noPets">You have no pets, sad face</p>}

      {/* when window renders, petAdd === false, so it won't show the form, if you click the button it will invoke changeAdd that will show the AddPet component that passes the fetchPets function to it because it will re-render the pet data when you add a pet   */}
      {petAdd === false ? '' : <AddPet fetch={fetchPets}/>}
      <button onClick={changeAdd} className="buttonStyles">Add Pet</button>
      
      <div id="account-history">
        {/* <YourPetRentalHistory /> */}
        <YourUserRentalHistory />
      </div>
    </div>
  )
}