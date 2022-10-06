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
        <div>
          <h1>Account</h1>
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd}>Add Pet</button>
<<<<<<< HEAD
          <RentalHistory />
          <PetsRented />
=======
          <div id="account-history">
            <RentalHistory />
          </div>
>>>>>>> 067f285b73c552af8b91751f57592046b6abc164
        </div>
    )
}