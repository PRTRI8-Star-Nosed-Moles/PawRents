import React, { useState, useEffect } from "react";
import { AddPet } from "./AddPet";
import { RentalHistory } from "./RentalHistory";
import { useLocation } from "react-router-dom";
import { PetsRented } from "./PetsRented";
import { MyPets } from "./MyPets";

export const Account = () => {
    const location = useLocation();
    // const username = sessionStorage.getItem('username');

    console.log(sessionStorage.getItem('username'))
    const username = sessionStorage.getItem('username')

    const [petAdd, setPetAdd] = useState(false)
    
    const [myPets, setMyPets] = useState([]);

    const fetchMyPets = async () => {
      const data = await fetch(`/api/pet/mypets/${username}`, {
          method: "GET"
      })
      const response = await data.json()
      setMyPets(response)
      console.log(response)
    }

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }

    useEffect(() => {
      fetchMyPets()
    }, [])

    return (
        <div>
          <h1>Account</h1>
          {petAdd === false ? '' : <AddPet/>}
          <div>
            <h4>My pets</h4>
            {myPets.map((pet, i) => <MyPets key={i} pet={pet}/>)}
          </div>
          <button onClick={changeAdd}>Add Pet</button>
          <div id="account-history">
            <RentalHistory />
            <PetsRented />
          </div>
        </div>
    )
}