import React, { useState } from "react";
import { AddPet } from "./AddPet";
import { RentalHistory } from "./RentalHistory";

export const Account = () => {
    const [petAdd, setPetAdd] = useState(false)
    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }
    return (
        <div>
          <h1>Account</h1>
          {petAdd === false ? '' : <AddPet/>}
          <button onClick={changeAdd}>Add Pet</button>
          <RentalHistory />
        </div>
    )
}