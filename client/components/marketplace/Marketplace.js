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
<<<<<<< HEAD
            <h4>Marketplace</h4>
=======
            {/* <header>Marketplace</header> */}
>>>>>>> 9ea6da5cc9f35213c1f2c83a220a872f227c5494
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