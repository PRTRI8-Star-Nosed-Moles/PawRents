import React, { useState, useEffect } from "react";
import { AddPet } from "./AddPet";
import { YourPetRentalHistory } from "./YourPetRentalHistory";
import { useLocation } from "react-router-dom";
import { YourUserRentalHistory } from "./YourUserRentalHistory";
import {MyPets} from "./MyPets"



export const Account = () => {
    const location = useLocation();
    const username = sessionStorage.getItem('username');


    const [myPets, setMyPets] = useState([])

    const fetchMyPets = async () => {
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

    const [petAdd, setPetAdd] = useState(false)

    useEffect(() => {
      fetchMyPets()
    }, [])

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }
    return (
        <div>
          <h1>Account for {username}</h1>
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd}>Add Pet</button>
          
          {myPets.map((myPets, i) =><MyPets key={i} obj={myPets} />)}
          
          <div id="account-history">
            <YourPetRentalHistory />
            <YourUserRentalHistory />
          </div>
        </div>
    )
}