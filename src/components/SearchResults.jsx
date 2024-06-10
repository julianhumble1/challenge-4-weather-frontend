import React from 'react'

import SearchResult from "./SearchResult/SearchResult.jsx"

const SearchResults = () => {
  return (
      <div>
        <SearchResult locationProp = "Dublin"/>
        <SearchResult locationProp = "London"/>
        <SearchResult locationProp = "Manchester"/>
      </div>
  )
}

export default SearchResults