import React, { useState } from "react";

export const AddPet = (props) => {
    //saving the username of the person logged in to the username variable
    const username = sessionStorage.getItem('username')
    //setting state of the data that will be inputted in the form below
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

    //handleSubmit posts the data in the form to the pet table
    const handleSubmit = async (e) => {
        //preventDefault so it doesn't reload the page
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

    //function that changes the state for name based on the e.target.value which is what the user inputted
    //this is the same format for all the fields below
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

    const changeAdd = () => {
        petAdd === false ? setPetAdd(true) : setPetAdd(false)
    }

    //return is the form to add a pet
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