import React, { useState } from 'react';
import { PetCard } from './PetCard';

export const Marketplace = ({ items }) => {
    const [pets, setPets] = useState([])
    
    // const fetchPets = () => {

    // }
    return ( 
        <section className='cards'>
            {items.map((item, i) => (
                <PetCard key={i} item={item}></PetCard>
            ))}
        </section>
    )
}

export const Search = ({ getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
        getQuery(e)
    }

    return (
        <section className='search'>
            <form>
                <input
                type='text'
                placeholder='Search pets...'
                value={text}
                onChange={setText}
                />
            </form>
        </section>
    )
}