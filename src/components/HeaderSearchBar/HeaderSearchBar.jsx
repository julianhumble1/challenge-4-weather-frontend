import React from 'react'

import "./HeaderSearchBar.css"
import { Link } from 'react-router-dom'

const HeaderSearchBar = ({searchQuery, setSearchQuery}) => {

  const handleSearch = async (event) => {
    event.preventDefault()
    setSearchQuery(searchQuery) 
  }

  return (
  <>
    <form className="d-flex justify-content-between col-md-4 col-12" onSubmit = {handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Find a city..." aria-label="Search" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)} } />
        <Link to="/">
          <button className="btn my-2 my-md-0" type="submit" id="header-search-button">Search</button>
        </Link>
    </form>
  </>
  )
}

export default HeaderSearchBar