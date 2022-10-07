import React from 'react';

export const YourUserRentalHistoryCard = (props) => {
    const {
        date,
        pet_id
    } = props.obj

    //need to link pet_id with pet name to render name here
    
    const resDate = new Date(date)
    const day = resDate.getDate()
    const month = resDate.getMonth()
    const year = resDate.getFullYear()

    return (
        <div className="account-pet-card" >
            <ul>
                <li>Date: {month + '/'+day + '/' + year}</li>
                <li>You are renting: {pet_id}</li>
            </ul>         
        </div>
    )
}