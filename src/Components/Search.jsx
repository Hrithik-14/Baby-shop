import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <div>
        <FaSearch id = "search-icon" />
        <input
        placeholder='Type to search'
        type="text" />
    </div>
  )
}

export default Search