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
        console.log('response from feetchMypets', response)
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

    useEffect(() => {
      fetchMyPets()
    }, [])

    return (
        <div className="account-container">
          <h4>Account for {username}</h4>

          <h5>My pets</h5>
          {myPets.map((pet, i) => <MyPets key={i} obj={pet}/>)}
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd} className="buttonStyles">Add Pet</button>
          
          <div id="account-history">
            <YourPetRentalHistory />
            <YourUserRentalHistory />
          </div>
        </div>
    )
}