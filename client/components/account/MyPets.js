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
          <div>
            <p>Pet Name: {props.obj.name}</p>
            <p>Pet Age: {props.obj.age}</p>
            <p>Pet Price: {props.obj.price}</p>
            <p>Bio: {props.obj.bio}</p>
            <p>Dog Owner: {props.obj.username}</p>
          </div>
          <div>
            <h4>Reservations</h4>
            {rentalDates.map((rental, i) => <YourPetRentalHistory key={i} rental={rental}/>)}
          </div>
        </div>
    )
}