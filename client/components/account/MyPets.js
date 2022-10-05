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
          <div>
            <p>{pet.name}</p>
            <p>{pet.age}</p>
            <p>{pet.price}</p>
            <p>{pet.bio}</p>
          </div>
          <div>
            <p>Reservations</p>
            {rentalDates.map((rental, i) => <PetRentals key={i} rental={rental}/>)}
          </div>
        </div>
    )
}