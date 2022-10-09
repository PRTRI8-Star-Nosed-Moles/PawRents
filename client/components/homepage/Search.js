import React, { useEffect, useState, getQuery } from 'react';

export const Search = ({ getQuery}) => {
return (
  <section>
      <form>
          <input
              className="searchInput"
              type='text'
              placeholder='Search pets...'
              value={text}
              onChange={setText}
          />
      </form>
  </section>
)
}