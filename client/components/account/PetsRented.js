import React from "react";
import { useState, useEffect } from 'react';
import { HistoryCard } from "./HistoryCard";

export const PetsRented= () =>{

    const[petsRented, setPetsRented] = useState([
        {
            _id: 10,
            date: '2022-10-06T04:00:00.00Z',
            pet_id: 1,
            username: 'testing'
        },
        {
            _id: 11,
            date: '2022-10-06T04:00:00.00Z',
            pet_id: 2,
            username: 'testing'
        },
        {
            _id: 12,
            date: '2022-10-06T04:00:00.00Z',
            pet_id: 2,
            username: 'testing'
        }
    ]);


    useEffect( ()=>{
        console.log("need function to loop through obj");
        // getPetsRented();

    }, [petsRented])

    const username = sessionStorage.getItem('username')

    const getPetsRented = () => {
        try{
            console.log("username",username)
            const response = fetch(`api/reservation/user/${username}`)
              .then(response => {
                console.log('response from .then',response);
                return response.json()
              })
              .then(data =>{
                console.log("data:",data)
                setPetsRented(data)
              })

        }catch (err){
            console.log(err)
        }
    }

    const petsYouRented = [];

    for(let i = 0; i < petsRented.length; i++){
        petsYouRented.push(<HistoryCard
          _id = {petsRented[i]._id}
          date = {petsRented[i].date}
          pet_id = {petsRented[i].pet_id}
          />  
        )
    }



    return(
        <div>
        <h1>Pet's you've rented</h1>
        <button 
          onClick = {getPetsRented}
        >Testing Button</button>
        {petsYouRented}

        </div>
    )
}