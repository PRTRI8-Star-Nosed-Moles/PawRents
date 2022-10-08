import React from "react";
import { useState, useEffect } from 'react';
import { YourUserRentalHistoryCard } from "./YourUserRentalHistoryCard";

export const YourUserRentalHistory = () => {
  // set state of pets rented to be empty array
  const [petsRented, setPetsRented] = useState([])
  // save username of user currently logged in to username variable
  const username = sessionStorage.getItem('username')
  
  // send request to backend to retrieve pets rented based on user
  const getPetsRented = async () => {
    console.log('inside YourUserRentalHistory - getPetsRented');
    try{
      // get request 
      const response = await fetch(`api/reservation/user/${username}`, {
        method: "GET"
      })
      const data = await response.json();
      setPetsRented(data)
    } catch (err){
        console.log(err)
    }
  }

  //invokes getPetsRented on render, the second argument is an empty array so that it tells react not to depend on any values from props and never needs to re-run
  useEffect(() => {
    getPetsRented()
  }, [])

  //if the petsRented array has a length then it maps through that array and renders the YourUserRentalHistoryCard component and passes the rental history
  return(
    <div>
        <h5>My user rental history</h5>
        {
          petsRented.length ? petsRented.map((history, i) => <YourUserRentalHistoryCard key={i} obj={history}/>) : <p>No pets rented yet.</p>
        }
    </div>
  )
}