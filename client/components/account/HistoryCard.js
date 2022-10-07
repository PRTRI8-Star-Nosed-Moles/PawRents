import React from 'react';

export const HistoryCard = (props) => {
    const {
        _id,
        date,
        pet_id 
    } = props

    //need to link pet_id with pet name to render name here

    return (
        <div>
            <ul>
            <li>transaction id: {_id}</li>
            <li>date: {date}</li>
            <li>name of pet: {pet_id}</li>
            </ul>         
        </div>
    )
}