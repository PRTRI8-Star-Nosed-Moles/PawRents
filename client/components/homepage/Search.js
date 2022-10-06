import React, { useEffect, useState, getQuery } from 'react';

export const Search = ({ getQuery}) => {
    // const [text, setText] = useState('')

    // const onChange = (e) => {
    //     setText(e.target.value)
    //     getQuery(e)
    // }

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