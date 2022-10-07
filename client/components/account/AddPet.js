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
        e.preventDefault();
        const data = await fetch(`/api/pet/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(petData)
        })
        const response = await data.json();
        console.log(response);
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
        <form onSubmit={handleSubmit}>
                <label>
                    Pet Name:
                    <input
                        type="type"
                        name="firstName"
                        value={petData.name}
                        onChange={changeName}
                    ></input>
                </label>
                <p></p>
                <label>
                    Age:
                    <input 
                        type="type"
                        name="age"
                        value={petData.age}
                        onChange={changeAge}
                    ></input>
                </label>
                <p></p>
                <label>
                    Weight (lbs):
                    <input 
                        type="type"
                        name="weight"
                        value={petData.weight}
                        onChange={changeWeight}
                    ></input>
                </label>
                <p></p>
                <label>
                    Species:
                    <input 
                        type="type"
                        name="species"
                        value={petData.species}
                        onChange={changeSpecies}
                    ></input>
                </label>
                <p></p>
                <label>
                    Breed:
                    <input 
                        type="type"
                        name="breed"
                        value={petData.breed}
                        onChange={changeBreed}
                    ></input>
                </label>
                <p></p>
                <label>
                    Image Url:
                    <input 
                        type="type"
                        name="imgurl"
                        value={petData.image_url}
                        onChange={changeImgUrl}
                    ></input>
                </label>
                <p></p>
                <label>
                    Rental Price (per day):
                    <input 
                        type="type"
                        name="price"
                        value={petData.price}
                        onChange={changePrice}
                    ></input>
                </label>
                <label>
                    Bio:
                    <input 
                        type="type"
                        name="bio"
                        value={petData.bio}
                        onChange={changeBio}
                    ></input>
                </label>
                <p></p>
                <input type="submit" className="buttonStyles"/>



            </form>
    )
}