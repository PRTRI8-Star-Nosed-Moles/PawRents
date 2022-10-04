import React, { useEffect, useState } from 'react';
import { PetCard } from './PetCard';


export const Marketplace = ({ items }) => {
    const [pets, setPets] = useState([])
    
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
            <header>Marketplace</header>
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