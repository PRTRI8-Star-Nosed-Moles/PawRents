import React, { useEffect, useState } from 'react';
import { PetCard } from './PetCard';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Search } from '../homepage/Search';


export const Marketplace = () => {
  //add use navigate to return to login page if username not in session storage
  const navigate = useNavigate()
  if (sessionStorage.getItem('username') === null) {
      navigate('/')
    }

  //get todays date
  const date = new Date()

  //turn date into format postgres likes
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

  //onchange function for name search input
  const changeSearchString = (e) => {
      setSearchString(e.target.value)
      fetchByDate()
  }

  //change the date we want to rent
  const changeRentalDate = (e) => {
      setSearchByDate(e.target.value)
  }

  //form on submit function for choosing date
  const handleSubmit = (e) => {
    console.log('inside Marketplace - handleSubmit');
    e.preventDefault()
    const newDate = new Date(e.target[0].value)
    //create a user readable date string
    setReadableDate(newDate.toString().slice(0, 15))
    //set the date to send to backend
    setSearchByDate(e.target[0].value)
    //fetch pets again to refresh pets array
    fetchByDate()
  }

  //initial fetch which filters pets available by date
  const fetchByDate = async () => {
    console.log('inside Marketplace - fetchByDate');
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
    } catch(err) {
      console.log(err)
    }
  }

  //use effect is listening to the search by name input box to re render
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
