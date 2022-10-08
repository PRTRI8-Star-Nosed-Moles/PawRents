import React, { useEffect, useState } from 'react';
import { PetCard } from './PetCard';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Search } from '../homepage/Search';


export const Marketplace = () => {
    const navigate = useNavigate()
    if (sessionStorage.getItem('username') === null) {
        navigate('/')
      }
    //get todays date
    const date = new Date()
    //turn it into format postgres likes
    const today = date.toISOString().slice(0, 10)
    //create a readable string to show users
    const todayReadable = date.toString().slice(0, 15)

    //initial fetch of pets by date
    const [pets, setPets] = useState([])
    //pets array that we can filter by name
    const [populatePets, setPopulatePets] = useState([])
    //the date we want to search by -- default today
    const [searchByDate, setSearchByDate] = useState(today)
    //the string we want to filter names by
    const [searchString, setSearchString] = useState('')
    //set the readable date for users
    const [readableDate, setReadableDate] = useState(todayReadable)
    const [reRender, setReRender] = useState(true)

    //onchange function for name search input
    const changeSearchString = (e) => {
        setSearchString(e.target.value)
        //invoke function to filter results
        fetchByDate()
    }

    //change the date we want to rent
    const changeRentalDate = (e) => {
        setSearchByDate(e.target.value)
    }
    
    //function to get all pets with no filter
    // const fetchPets = async () => {
    //   try {
    //     const response = await fetch(`/api/pet/`, {
    //         method: "GET"
    //     })
    //     const data = await response.json();
    //     console.log(data)
    //     setPets(data)
    //     setPopulatePets(data)
    //   } catch(err) {
    //     console.log(err)
    //   }
    // } 

    //form for choosing date
    const handleSubmit = (e) => {
        e.preventDefault()
        const newDate = new Date(e.target[0].value)
        setReadableDate(newDate.toString().slice(0, 15))
        setSearchByDate(e.target[0].value)
        fetchByDate()
    }
    
    //filter through pets array to choose something similar to input
    // const searchByName = () => {
    //     console.log(searchString)
    //     const arr = populatePets.filter(pet => pet.name.toLowerCase().includes(searchString.toLowerCase()))
    //     setPets(arr)
    // }

    //initial fetch which filters pets available by date
    const fetchByDate = async () => {
      try {  
        const data = await fetch(`/api/pet/date/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                searchDate: searchByDate,
                petName: searchString
            })
        })
        const response = await data.json()
        setPets(response)
        setReRender(false)
        // setPopulatePets(response)
      } catch(err) {
        console.log(err)
      }
    }
 
    useEffect(() => {
      fetchByDate()
    }, [searchString])

    return (
        <div id='marketplace'>
            <section className="searchContainer">
                <label>
                    Search by name:
                    <input type="text" onChange={changeSearchString} value={searchString}  className="searchInput"/>
                </label>
                <form onSubmit={handleSubmit} className="searchForm">
                    <p>Searching for pets available on: <span className="blackText">{readableDate}</span></p>
                    <label>
                        Change date:
                        <input type="date" onChange={changeRentalDate} className="searchInput"/>
                    </label>
                    <input type="submit" value="Search" className="searchButton"/>
                </form>
            </section>
            <section className='cards'>
            {pets.map((pet, i) => (
                <PetCard key={i} item={pet}></PetCard>
            ))}
            </section>
        </div>
    )
}

// export const Search = ({ getQuery}) => {
//     const [text, setText] = useState('')

//     const onChange = (e) => {
//         setText(e.target.value)
//         getQuery(e)
//     }

//     return (
//         <section className='search'>
//             <form>
//                 <input
//                 type='text'
//                 placeholder='Search pets...'
//                 value={text}
//                 onChange={setText}
//                 />
//             </form>
//         </section>
//     )
// }