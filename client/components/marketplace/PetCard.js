import React from "react";

export const PetCard = ({ item }) => {
    return (
        <div className="card">
            <div className="c-front">
                <img src={item.img} />
            </div>
            <div className="c-back">
                <h5>{item.name}</h5>
                <ul>
                    <li>Bio: {item.bio}</li>
                    <li>Age: {item.age}</li>
                    <li>Breed: {item.breed}</li>
                    <li>Weight: {item.weight}</li>
                    <li>Price: {item.price}</li>
                    <button>Rent Me!</button>
                </ul>
            </div>
        </div>
    )
}