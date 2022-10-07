import React, { useEffect, useState } from 'react';
import { YourPetRentalHistory } from './YourPetRentalHistory';

export const MyPets = (props) => {
  console.log("props in MyPets",props)


    const [rentalDates, setRentalDates] = useState([])

    const fetchRentalDates = async () => {
        try {
          const data = await fetch(`/api/reservation/pet/${pet._id}`, {
            method: "GET"
          });
          const response = await data.json()
          setRentalDates(response)
          console.log("fetchRentalDates resonse: ",response)
        } catch(err) {
          console.log('error' + err)
        }
    }
    useEffect(() => {
        fetchRentalDates()
    }, [])

    return (
        <div>
        
          <div className="account-pet-card">
            <div className="account-pet-detail">Name:<span>{props.obj.name}</span></div>
            <div className="account-pet-detail">Age:<span>{props.obj.age}</span></div>
            <div className="account-pet-detail">Current Listed Price:<span>{props.obj.price}</span></div>
            <div className="account-pet-detail">Bio:<span>{props.obj.bio}</span></div>
          </div>
          <div>
           
            {/* rentalDates.map((rental, i) => <YourPetRentalHistory key={i} rental={rental}/>) */}
          </div>
        </div>
    )
}