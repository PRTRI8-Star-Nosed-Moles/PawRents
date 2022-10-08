import React, { useEffect, useState } from "react";
import { AddPet } from "./AddPet";
import { YourPetRentalHistory } from "./YourPetRentalHistory";
import { useLocation, useNavigate } from "react-router-dom";
import { YourUserRentalHistory } from "./YourUserRentalHistory";
import { MyPets } from "./MyPets"


export const Account = () => {
    const navigate = useNavigate();
    // const username = sessionStorage.getItem('username');
    if (sessionStorage.getItem('username') === null) {
      navigate('/')
    }

    console.log(sessionStorage.getItem('username'))
    const username = sessionStorage.getItem('username')

    const [myPets, setMyPets] = useState([])

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

    // const fetchMyPets = async () => {
    //   try {
    //     const data = await fetch(`/api/pet/mypets/${username}`, {
    //       method: "GET"
    //     });
    //     const response = await data.json();
    //     console.log('response from feetchMypets', response)
    //     setMyPets(response)
    //   } catch(err) {
    //     console.log(err)
    //   }
    // }


    // useEffect(() => {
    //   fetchMyPets()
    // }, [])

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }

    // useEffect(() => {
    //   fetchMyPets()
    // }, [])

    return (
        <div className="account-container">
          <h4>{username}</h4>
          <h5>My pets</h5>

          <div id="pets-display">
            {myPets.map((pet, i) => <MyPets key={i} obj={pet} fetchPets={fetchPets}/>)}
          </div>
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd} className="buttonStyles">add pet</button>
          
          <div id="account-history">
            {/* <YourPetRentalHistory /> */}
            <YourUserRentalHistory />
          </div>
        </div>
    )
}