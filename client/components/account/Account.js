import React, { useState, useEffect } from "react";
import { AddPet } from "./AddPet";
import { YourPetRentalHistory } from "./YourPetRentalHistory";
import { useLocation } from "react-router-dom";
import { YourUserRentalHistory } from "./YourUserRentalHistory";
import { MyPets } from "./MyPets"


export const Account = () => {
    const location = useLocation();
    const username = sessionStorage.getItem('username');


    const [myPets, setMyPets] = useState([])
    const [petAdd, setPetAdd] = useState(false)

    const fetchMyPets = async () => {
      try {
        const data = await fetch(`/api/pet/mypets/${username}`, {
          method: "GET"
        });
        const response = await data.json();
        console.log('response from fetchMypets', response)
        setMyPets(response)
      } catch(err) {
        console.log(err)
      }
    }


    useEffect(() => {
      fetchMyPets()
    }, [])

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }

    return (
        <div className="account-container">
          <h4>{username}</h4>
          <h5>My pets</h5>

          <div id="pets-display">
            {myPets.map((pet, i) => <MyPets key={i} obj={pet}/>)}
          </div>
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd} className="buttonStyles">add pet</button>
          
          <div id="account-history">
            <YourPetRentalHistory />
            <YourUserRentalHistory />
          </div>
        </div>
    )
}