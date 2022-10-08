import React from "react";
import { useState, useEffect } from 'react';
import { YourUserRentalHistoryCard } from "./YourUserRentalHistoryCard";

export const YourUserRentalHistory = () => {

  const [petsRented, setPetsRented] = useState([])

  const username = sessionStorage.getItem('username')

  const getPetsRented = async () => {
      try{
        const response = await fetch(`api/reservation/user/${username}`, {
          method: "GET"
        })
        const data = await response.json();
        console.log('new data', data);
        setPetsRented(data)
          
      } catch (err){
          console.log(err)
      }
  }

  useEffect(() => {
    getPetsRented()
    // console.log('use effect running')
  }, [])


  return(
      <div>
          <h5>My user rental history</h5>

      {petsRented.length ? petsRented.map((history, i) => <YourUserRentalHistoryCard key={i} obj={history}/>) : <p>No pets rented yet.</p>}
      
      </div>
  )
}