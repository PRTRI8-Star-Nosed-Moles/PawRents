import React from 'react';

export const YourUserRentalHistoryCard = (props) => {
    const {
        _id,
        date,
        pet_id,
        username
    } = props.obj

    //need to link pet_id with pet name to render name here

    return (
        <div className="account-pet-card" >
            <ul>
            <li>_id: {_id}</li>
                
                <li>date: {date}</li>
                <li>pet id: {pet_id}</li>
            </ul>         
        </div>
    )
}