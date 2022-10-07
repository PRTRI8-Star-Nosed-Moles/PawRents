import React, { useEffect, useState } from "react";
import { AddPet } from "./AddPet";
import { RentalHistory } from "./RentalHistory";
import { useLocation } from "react-router-dom";
import { PetsRented } from "./PetsRented";


export const Account = () => {
    const location = useLocation();
    // const username = sessionStorage.getItem('username');
    const [myPets, setMyPets] = useState([])

    console.log(sessionStorage.getItem('username'))
    const username = sessionStorage.getItem('username')

    const fetchPets = async () => {
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

    useEffect(() => {
      fetchPets()
    }, [])

    const [petAdd, setPetAdd] = useState(false)

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }
    return (
        <div>
          <h1>Account</h1>
          {myPets.map((pet, i) => <MyPets key={i} pet={pet}/>)}
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd}>Add Pet</button>
          <div id="account-history">
            <RentalHistory />
            <PetsRented />
          </div>
        </div>
    )
}