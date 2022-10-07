import React, { useEffect, useState } from 'react';
import { PetCard } from './PetCard';
import { useLocation } from 'react-router-dom';
import { Search } from '../homepage/Search';


export const Marketplace = ({ items }) => {
    const [pets, setPets] = useState([])

    const [rentalDate, setRentalDate] = useState('')

    const location = useLocation();

    console.log(sessionStorage.getItem('username'))

    const [searchString, setSearchString] = useState('')

    const changeSearchString = (e) => {
        setSearchString(e.target.value)
    }

    const changeRentalDate = (e) => {
        setRentalDate(e.target.value)
    }
    
    const fetchPets = async () => {
      try {
        const response = await fetch(`/api/pet/${searchString}`, {
            method: "GET"
        })
        const data = await response.json();
        console.log(data)
        setPets(data)
      } catch(err) {
        console.log(err)
      }
    } 


    const fetchByDate = async () => {
      try {  
        const data = await fetch(`/api/pet/date/${rentalDate}`, {
            method: "GET"
        })
        const response = await data.json()
        setPets(response)
      } catch(err) {
        console.log(err)
      }
    }
 
    useEffect(() => {
        fetchPets()
    }, [])

    return ( 

        <div id='marketplace'>
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