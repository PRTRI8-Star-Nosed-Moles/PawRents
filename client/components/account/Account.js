import React, { useState } from "react";
import { AddPet } from "./AddPet";
import { RentalHistory } from "./RentalHistory";
import { useLocation } from "react-router-dom";

export const Account = () => {
    const location = useLocation();
    // const username = sessionStorage.getItem('username');

    console.log(sessionStorage.getItem('username'))

    const [petAdd, setPetAdd] = useState(false)

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }
    return (
        <div id="account">
          <div id="account-pet">
            {petAdd === false ? '' : <AddPet/>}
          </div>
          <button onClick={changeAdd}>Add Pet</button>
          <div id="account-history">
            <RentalHistory />
          </div>
        </div>
    )
}