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
          <div className="account-pet-card">
            <div className="account-pet-detail">Name:<span className="account-pet-detail-value">{pet.name}</span></div>
            <div className="account-pet-detail">Age:<span className="account-pet-detail-value">{pet.age}</span></div>
            <div className="account-pet-detail">Current Listed Price:<span className="account-pet-detail-value">{pet.price}</span></div>
            <div className="account-pet-detail">Bio:<span className="account-pet-detail-value">{pet.bio}</span></div>
          </div>
          <div>
            {/* <p>Reservations</p> */}
            {rentalDates.map((rental, i) => <PetRentals key={i} rental={rental}/>)}
          </div>
        </div>
    )
}