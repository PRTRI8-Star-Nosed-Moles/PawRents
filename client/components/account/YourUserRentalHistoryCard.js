import React from 'react';

export const YourUserRentalHistoryCard = (props) => {
    const {
        date,
        pet_id,
        name,
    } = props.obj

    //need to link pet_id with pet name to render name here
    //adding comment here
    
    const resDate = new Date(date)
    const dateRead = resDate.toString().slice(0, 15)
    const day = resDate.getDate()
    const month = resDate.getMonth()
    const year = resDate.getFullYear()

    return (
        <div className="account-rental-card" >
            <p>Date: {month + '/'+day + '/' + year}</p>
            <p>You are renting: {name}</p>
        </div>
    )
}