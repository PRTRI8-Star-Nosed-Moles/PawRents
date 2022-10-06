import React from "react";
import { useState, useEffect } from 'react';

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
        console.log("need function to loop through obj")

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
        petsYouRented.push(
            
        )
    }



    return(
        <div>
        <h1>Pet's you've rented</h1>
        <button 
          onClick = {getPetsRented}
        >Testing Button</button>
        
          <ul>
            <li>transaction ID</li>
            <li>date</li>
            <li>pet name</li>
            <li>date</li>
          </ul>

        </div>
    )
}