import React from "react";

export const YourPetRentalHistoryCard = (props) => {

    const {rental} = props
    console.log(rental)

    const newDate = new Date(rental.date)
    const day = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    
    return (
        <div className="account-pet-card" >
          <p>Date: {month + '/' + day + '/' + year}</p>
          <p>Reserved by: {rental.username}</p>
        </div>
    )
}