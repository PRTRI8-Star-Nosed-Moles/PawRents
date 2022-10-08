import React, { useEffect, useState } from 'react';
import { YourPetRentalHistoryCard } from './YourPetRentalHistoryCard';

export const MyPets = (props) => {
  console.log("props in MyPets", props)
  const [rentalDates, setRentalDates] = useState([])

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
  
  const deletePet = async (e) => {
    console.log('inside handleDelete');
    e.preventDefault();

    const petData = {
      name: props.obj.name,
      age: props.obj.age,
      price: props.obj.price,
    };
    console.log('current pet --> ', petData);

    const data = await fetch('/api/pet/', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(petData)
    })
    const response = await data.json();
  }

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
          
          <div className="petButtonContainer">
            <input type="text" onChange={e => handleUpdateChange(e)} placeholder='New Bio' className="searchInput"></input>
            <button className="searchButton" onClick={e => updatePet()}>Update</button>
            <button className="buttonStyles" onClick={deletePet}>delete pet</button>   
          </div>
          {/* rentalDates.map((rental, i) => <YourPetRentalHistory key={i} rental={rental}/>) */}
        </div>
      </div>
  )
}