import React from 'react'

import SearchResult from "./SearchResult/SearchResult.jsx"

import cityData from "../dublinData.js";
const { cityInfo } = cityData

const SearchResults = () => {
  return (
      <div>
      <SearchResult cityInfo={cityInfo} />
        <SearchResult cityInfo={cityInfo}/>
        <SearchResult cityInfo={cityInfo}/>
      </div>
  )
}

export default SearchResults