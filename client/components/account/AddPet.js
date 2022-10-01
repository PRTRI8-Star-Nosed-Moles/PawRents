import React, { useState } from "react";

export const AddPet = (props) => {
    const [petData, setPetData] = useState({
        name: '',
        age: '',
        weight: '',
        species: '',
        breed: '',
        imgUrl: '',
        price: '',
        bio: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
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
            imgUrl: e.target.value
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
                    Name:
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
                    Weight:
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
                        value={petData.imgUrl}
                        onChange={changeImgUrl}
                    ></input>
                </label>
                <p></p>
                <label>
                    Price:
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
                <input type="submit" />



            </form>
    )
}