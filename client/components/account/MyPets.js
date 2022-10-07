import React, { useEffect, useState } from 'react';
import { PetRentals } from './PetRentals';

export const MyPets = (props) => {
    const {pet} = props
    const [rentalDates, setRentalDates] = useState([])
    const fetchRentalDates = async () => {
        try {
          const data = await fetch(`/api/reservation/pet/${pet._id}`, {
            method: "GET"
          });
          const response = await data.json()
          setRentalDates(response)
          console.log(response)
        } catch(err) {
          console.log('error' + err)
        }
    }
    useEffect(() => {
        fetchRentalDates()
    }, [])
    return (
        <div>
          <div id="account-pet-card">
            <div id="account-pet-detail">Name:<p>{pet.name}</p></div>
            <div id="account-pet-detail">Age:<p>{pet.age}</p></div>
            <div id="account-pet-detail">Current Listed Price:<p>{pet.price}</p></div>
            <div id="account-pet-detail">Bio:<p>{pet.bio}</p></div>
          </div>
          <div>
            <p>Reservations</p>
            {rentalDates.map((rental, i) => <PetRentals key={i} rental={rental}/>)}
          </div>
        </div>
    )
}