import React from 'react'

const homePage = false;

const HeaderSearchBar = () => {
  return (
  <>
    { homePage &&
    <form className="d-flex justify-content-between col-md-4 col-12">
        <input className="form-control me-2" type="search" placeholder="Find a city..." aria-label="Search" />
        <button className="btn my-2 my-md-0" type="submit" id="search-button">Search</button>
    </form>
    }
  </>
  )
}

export default HeaderSearchBar