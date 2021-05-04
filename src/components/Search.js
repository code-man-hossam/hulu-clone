import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const Search = ({ setQuery }) => {
  return (
    <form className='movies__search'>
      <BiSearchAlt2 />
      <input
        type='text'
        placeholder='Search Movies...'
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default Search
