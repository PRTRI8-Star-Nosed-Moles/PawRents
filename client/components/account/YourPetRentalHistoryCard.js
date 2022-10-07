import React from "react";

export const YourPetRentalHistoryCard = (props) => {

    const newDate = new Date(props.obj.date)
    const day = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    
    return (
        <div className="account-pet-card" >
          <p>Date: {month + '/' + day + '/' + year}</p>
          <p>Reserved by: {props.obj.username}</p>
        </div>
    )
}