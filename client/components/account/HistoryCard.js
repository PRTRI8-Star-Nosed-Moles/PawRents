import React from 'react';

export const HistoryCard = (props) => {
    const {
        _id,
        date,
        pet_id 
    } = props

    // let newDate = "";
    // for (let char of date) {
    //     if (char === "t") break;
    //     newDate += char;
    // }

    //need to link pet_id with pet name to render name here

    return (
        <div className="history-card">
            <ul>
                <li>transaction id: {_id}</li>
                <li>date: {date}</li>
                <li>name of pet: {pet_id}</li>
            </ul>         
        </div>
    )
}