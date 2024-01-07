"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
  const [manufacturar, setmanufacturar] = useState('')
  const handleSearch=()=>{
  }
  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturar} setManuFacturer={setmanufacturar} />
      </div>
    </form>
  )
}

export default SearchBar