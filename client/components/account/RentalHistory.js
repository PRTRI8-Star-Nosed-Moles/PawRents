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
            <h1>Your Pet's Rental History</h1>
            <ul>
                <li>transaction ID</li>
                <li>date</li>
                <li>pet name</li>
                <li>date</li>
            </ul>
        </div>
    )

}

