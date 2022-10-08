import React from "react";

export const PetCard = (props) => {
  //pet info sent as object through props called item
  const {item} = props;

  //PSEUDO-AUTHORIZATION
  const username = sessionStorage.getItem("username");
  
  //function allows user to reserve this pet
  const addReservation = async (e) => {
    console.log('inside PetCard - addReservation')
    e.preventDefault()
    const date = e.target[0].value
    const data = {
        date: date,
        pet_id: item._id,
        username: username,
    }
    try {
        const response = await fetch('/api/reservation', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
        });
    } catch (err){
        console.log(err)
    }
  }
  
  
  return (
    <div className="card">
      <div className="c-inside">
        <div className="c-front">
          <img src={item.image_url} />
        </div>
        <div className="c-back">
          <h5>{item.name}</h5>
          <ul>
            <li>Bio: {item.bio}</li>
            <li>Age: {item.age}</li>
            <li>Breed: {item.breed}</li>
            <li>Weight: {item.weight}</li>
            <li>Price: {item.price}</li>
          </ul>
          <form onSubmit = {addReservation}>
            <div className="center">
              <label id="reslabel">
                <input type="date" name="date"/>
              </label>
            </div>
            <div className="center">
              <input id="rentmebtn" type="submit" value="Rent Me!"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}