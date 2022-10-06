import React, { useEffect, useState } from 'react';
import { PetCard } from './PetCard';
import { useLocation } from 'react-router-dom';


export const Marketplace = ({ items }) => {
    const [pets, setPets] = useState([])

    const location = useLocation();

    console.log(sessionStorage.getItem('username'))
    
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/pet', {
            method: "GET"
        })
        const data = await response.json();
        console.log(data)
        setPets(data)
      } catch(err) {
        console.log(err)
      }
    } 
 
    useEffect(() => {
        fetchPets()
    }, [])

    return ( 
        <div id='marketplace' className='cards'>
            <h4>Marketplace</h4>
            {/* <div><PetCard/></div> */}
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