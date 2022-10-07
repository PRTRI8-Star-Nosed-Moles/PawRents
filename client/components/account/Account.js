import React, { useState } from "react";
import { AddPet } from "./AddPet";
import { RentalHistory } from "./RentalHistory";
import { useLocation } from "react-router-dom";
import { PetsRented } from "./PetsRented";


export const Account = () => {
    const location = useLocation();
    // const username = sessionStorage.getItem('username');

    console.log(sessionStorage.getItem('username'))

    const [petAdd, setPetAdd] = useState(false)

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }
    return (
        <div className="account-container">
          <h4>Account</h4>
          
          {petAdd === false ? '' : <AddPet/>}

          <button 
            onClick={changeAdd} 
            className="buttonStyles">
              Add Pet
          </button>

          <div id="account-history">
            <RentalHistory />
            <PetsRented />
          </div>
        </div>
    )
}