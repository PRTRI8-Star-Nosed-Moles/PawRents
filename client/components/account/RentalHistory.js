import React from 'react';
import { useState, useEffect } from 'react';
import {HistoryCard} from './HistoryCard'

export const RentalHistory = () =>{
    
    const [rentalHistory, setRentalHistory] = useState([]);



    const username = sessionStorage.getItem('username');

    const updateHistory = async () => {
        console.log('fetch')
        const data = await fetch(`/api/reservation/user/${username}`, {
            method: "GET"
        })
        const response = await data.json()
        console.log(response + 'fetch history')
        setRentalHistory(response)
    }

    useEffect(() => {
        updateHistory()
    }, []) 

    return(
        <div>
            {rentalHistory.map((history, i) => <HistoryCard key={i} obj={history}/>)}
            <h5>Your Pet's Rental History</h5>
            
        </div>
    )

}

