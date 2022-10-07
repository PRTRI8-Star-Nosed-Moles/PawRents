import React, { useEffect, useState } from 'react';
import { YourPetRentalHistoryCard } from './YourPetRentalHistoryCard';

export const MyPets = (props) => {
  console.log("props in MyPets",props)


    const [rentalDates, setRentalDates] = useState([])

    const fetchRentalDates = async () => {
        try {
          const data = await fetch(`/api/reservation/pet/${props.obj._id}`, {
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

    const deletePet = async () => {
      try {
        const data = await fetch(`/api/pet/${props.obj._id}`, {
          method: "DELETE"
        })
        const response = await data.json()
        console.log(response)
        props.fetch()
      } catch(err) {
        console.log(err)
      }
    }

    return (
        <div>
        
          <div className="account-pet-card">
<<<<<<< HEAD
            <div className="account-pet-detail">Name:<span className="account-pet-detail-value">{props.obj.name}</span></div>
            <div className="account-pet-detail">Age:<span className="account-pet-detail-value">{props.obj.age}</span></div>
            <div className="account-pet-detail">Current Listed Price:<span className="account-pet-detail-value">{props.obj.price}</span></div>
            <div className="account-pet-detail">Bio:<span className="account-pet-detail-value">{props.obj.bio}</span></div>
            <button onClick={deletePet}>Delete Pet</button>
=======
            <div className="account-pet-detail">Name:<span>{props.obj.name}</span></div>
            <div className="account-pet-detail">Age:<span>{props.obj.age}</span></div>
            <div className="account-pet-detail">Current Listed Price:<span>{props.obj.price}</span></div>
            <div className="account-pet-detail">Bio:<span>{props.obj.bio}</span></div>
>>>>>>> dev
          </div>
          <div>
           
          {rentalDates.map((rental, i) => <YourPetRentalHistoryCard key={i} rental={rental}/>)}
          </div>
        </div>
    )
}