import React, { useState } from "react";

export const AddPet = (props) => {
    const username = sessionStorage.getItem('username')
    const [petData, setPetData] = useState({
        name: '',
        age: '',
        weight: '',
        species: '',
        breed: '',
        image_url: '',
        price: '',
        bio: ''
    })

    const handleSubmit = async (e) => {
        console.log(username)
        console.log('submit')
        e.preventDefault();
        const data = await fetch(`/api/pet/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(petData)
        })
        const response = await data.json();
        console.log(response);
        props.fetch()
    }

    const changeName = (e) => {
        setPetData({
            ...petData,
            name: e.target.value
        })
    }

    const changeAge = (e) => {
        setPetData({
            ...petData,
            age: e.target.value
        })
    }

    const changeWeight = (e) => {
        setPetData({
            ...petData,
            weight: e.target.value
        })
    }

    const changeSpecies = (e) => {
        setPetData({
            ...petData,
            species: e.target.value
        })
    }

    const changeBreed = (e) => {
        setPetData({
            ...petData,
            breed: e.target.value
        })
    }

    const changeImgUrl = (e) => {
        setPetData({
            ...petData,
            image_url: e.target.value
        })
    }

    const changePrice = (e) => {
        setPetData({
            ...petData,
            price: e.target.value
        })
    }

    const changeBio = (e) => {
        setPetData({
            ...petData,
            bio: e.target.value
        })
    }

    return (
        <form id="addPetForm" onSubmit={handleSubmit}>
                <div>
                    Pet Name:
                    <input
                        type="type"
                        name="firstName"
                        value={petData.name}
                        onChange={changeName}
                    ></input>
                </div>
                <p></p>
                <div>
                    Age:
                    <input 
                        type="type"
                        name="age"
                        value={petData.age}
                        onChange={changeAge}
                    ></input>
                </div>
                <p></p>
                <div>
                    Weight (lbs):
                    <input 
                        type="type"
                        name="weight"
                        value={petData.weight}
                        onChange={changeWeight}
                    ></input>
                </div>
                <p></p>
                <div>
                    Species:
                    <input 
                        type="type"
                        name="species"
                        value={petData.species}
                        onChange={changeSpecies}
                    ></input>
                </div>
                <p></p>
                <div>
                    Breed:
                    <input 
                        type="type"
                        name="breed"
                        value={petData.breed}
                        onChange={changeBreed}
                    ></input>
                </div>
                <p></p>
                <div>
                    Image Url:
                    <input 
                        type="type"
                        name="imgurl"
                        value={petData.image_url}
                        onChange={changeImgUrl}
                    ></input>
                </div>
                <p></p>
                <div>
                    Rental Price (per day):
                    <input 
                        type="type"
                        name="price"
                        value={petData.price}
                        onChange={changePrice}
                    ></input>
                </div>
                <div>
                    Bio:
                    <input 
                        type="type"
                        name="bio"
                        value={petData.bio}
                        onChange={changeBio}
                    ></input>
                </div>
                <p></p>
                <input type="submit" className="buttonStyles"/>
            </form>
    )
}