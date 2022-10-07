import React from 'react';

export const YourUserRentalHistoryCard = (props) => {
    const {
        date,
        pet_id
    } = props.obj

    //need to link pet_id with pet name to render name here
    //adding comment here
    
    const resDate = new Date(date)
    const dateRead = resDate.toString().slice(0, 15)
    const day = resDate.getDate()
    const month = resDate.getMonth()
    const year = resDate.getFullYear()

    return (
<<<<<<< HEAD
        <div className="account-pet-card" >
            <ul>
                <li>Date: {dateRead}</li>
                <li>You are renting: {props.obj.name}</li>
            </ul>         
=======
        <div className="account-rental-card" >
            <p>Date: {month + '/'+day + '/' + year}</p>
            <p>You are renting: {pet_id}</p>
>>>>>>> dev
        </div>
    )
}