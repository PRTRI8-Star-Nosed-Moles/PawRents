import React from "react";

export const PetRentals = (props) => {
    const {rental} = props;
    const newDate = new Date(rental.date)
    const day = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    return (
        <div>
          <p>Date: {month + '/' + day + '/' + year}</p>
          <p>Reserved by: {rental.username}</p>
        </div>
    )
}