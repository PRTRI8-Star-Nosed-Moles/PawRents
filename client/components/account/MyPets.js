import React, { useEffect, useState } from 'react';

export const MyPets = (props) => {
  //Dates that this pet has been rented
  const [rentalDates, setRentalDates] = useState([])

  //Save State via updateBio input field via onchange;
  const [bioUpdate, setBioUpdate] = useState('')

  //this passes the inputted value into the setBioUpdate function that updates the state
  const handleUpdateChange = event => {
    setBioUpdate(event.target.value);
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
  //delete pet button function  
  const deletePet = async (e) => {
    console.log('inside handleDelete');
    e.preventDefault();

    const petData = {
      name: props.obj.name,
      age: props.obj.age,
      price: props.obj.price,
    };
    const data = await fetch('/api/pet/', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(petData)
    })
    const response = await data.json();
  }

  //fetch GET's the rental dates for your pet
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

  //updates the pet rental dates on render
  useEffect(() => {
      fetchRentalDates()
  }, [])

  //renders your pet info 
  return (
      <div>
        <div className="account-pet-card">
          <div className="account-pet-detail">
            Name:<span>{props.obj.name}</span>
          </div>
          <div className="account-pet-detail">
            Age:<span>{props.obj.age}</span>
          </div>
          <div className="account-pet-detail">
            Current Listed Price:<span>{props.obj.price}</span>
          </div>
          <div className="account-pet-detail">
            Bio:<span>{props.obj.bio}</span>
          </div>
          
          <div className="petButtonContainer">
            <input type="text" onChange={e => handleUpdateChange(e)} placeholder='New Bio' className="searchInput">
            </input>
            <button className="buttonStyles" onClick={e => updatePet()}>Update
            </button>
            <button className="buttonStyles" onClick={deletePet}>delete
            </button>   
          </div>

          {rentalDates.length ? rentalDates.map((rental, i) => <YourPetRentalHistoryCard key={i} rental={rental}/>) : <p>Your pet has no rentals</p>}
        </div>
      </div>
  )
}