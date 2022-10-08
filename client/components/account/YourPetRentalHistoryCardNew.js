import React from "react";

export const YourPetRentalHistoryCardNew = (props) => {
    //pulling in rental info via props
    const {rental} = props

    //declares a new variable newDate based on the rental date from props and formats it
    const newDate = new Date(rental.date).toString().slice(0, 15)

    
    return (
        <div className="account-rental-card" >
          <p>Date: {newDate}</p>
          <p>Reserved by: {rental.username}</p>
        </div>
    )
}