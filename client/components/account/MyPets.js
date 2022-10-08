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

    //Save State via updateBio input field via onchange;
    const [bioUpdate, setBioUpdate] = useState('')

    const handleUpdateChange = event => {
      setBioUpdate(event.target.value);
      // console.log('bioupdate', bioUpdate)
    }

    //UPDATE PET BUTTON
    const updatePet = async () => {
      console.log('updatePet')
      try {
        const data = await fetch(`/api/pet/${props.obj._id}`, {
          method: "PATCH",
          body: JSON.stringify({
            bio: bioUpdate
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const response = await data.json()
        console.log(response)
        props.fetchPets()
      } catch (err) {
        console.log(err)
      }
    }

    //DELETE PET BUTTON
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
            <div className="account-pet-detail">Name:<span>{props.obj.name}</span></div>
            <div className="account-pet-detail">Age:<span>{props.obj.age}</span></div>
            <div className="account-pet-detail">Current Listed Price:<span>{props.obj.price}</span></div>
            <div className="account-pet-detail">Bio:<span>{props.obj.bio}</span></div>

            <div className="petButtonContainer">
              <input type="text" onChange={e => handleUpdateChange(e)} placeholder='New Bio' className="searchInput"></input>
              <button className="searchButton" onClick={e => updatePet()}>Update</button>
              <button className="searchButton">Delete</button>
            </div>
          </div>
          <div>
           
          {rentalDates.map((rental, i) => <YourPetRentalHistoryCard key={i} rental={rental}/>)}
          </div>
        </div>
    )
}