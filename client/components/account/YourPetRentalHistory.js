import React from 'react';
import { useState, useEffect } from 'react';
import {YourPetRentalHistoryCard} from './YourPetRentalHistoryCard'

export const YourPetRentalHistory = () =>{
    
    const [rentalHistory, setRentalHistory] = useState([]);



    const username = sessionStorage.getItem('username');

    const updateHistory = async () => {
        
        const data = await fetch(`/api/reservation/user/${username}`, {
            method: "GET"
        })
        const response = await data.json()
        // console.log(response + 'fetch history')
        setRentalHistory(response)
    }

    useEffect(() => {
        updateHistory()
    }, []) 

    return(
        <div>
        <h5>My Pet's Rental History</h5>

        {rentalHistory.map((history, i) => <YourPetRentalHistoryCard key={i} obj={history}/>)}
           
            
            
        </div>
    )

}



