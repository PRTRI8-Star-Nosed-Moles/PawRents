import React, { useEffect, useState, getQuery } from 'react';

export const Search = ({ getQuery}) => {
    // const [text, setText] = useState('')

    // const onChange = (e) => {
    //     setText(e.target.value)
    //     getQuery(e)
    // }

    return (
        <section>
            <form>
                <input
<<<<<<< HEAD
                type='text'
                placeholder='Search pets...'
                value=''
                onChange=''
=======
                    className="searchInput"
                    type='text'
                    placeholder='Search pets...'
                    value={text}
                    onChange={setText}
>>>>>>> dev
                />
            </form>
        </section>
    )
}