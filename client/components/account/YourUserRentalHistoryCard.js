import React from 'react';

export const YourUserRentalHistoryCard = (props) => {
    //destructures props so that you don't have to use props. before variable
    const {
        date,
        pet_id,
        name,
    } = props.obj
    
    //declares a variable for a new date and then formats the date
    const resDate = new Date(date)
    const dateRead = resDate.toString().slice(0, 15)
    const day = resDate.getDate()
    const month = resDate.getMonth()
    const year = resDate.getFullYear()

    return (
        <div className="account-pet-card" >
            <ul>
                <li>Date: {dateRead}</li>
                <li>You are renting: {name}</li>
            </ul>         
        </div>
    )
}