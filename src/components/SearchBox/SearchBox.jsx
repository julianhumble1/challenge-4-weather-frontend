import "./SearchBox.css"

import SearchResult from "../SearchResult/SearchResult.jsx"
import { useState, useEffect } from "react"

const SearchBox = ({setRenderHeaderSearch, searchQuery, setSearchQuery}) => {

  useEffect(() => {
    setRenderHeaderSearch(false);
  }, [setRenderHeaderSearch])

  useEffect(() => {
    if(searchQuery!="")
    updateSearch(searchQuery)
  }, [searchQuery])
  
  const [tempQuery, setTempQuery] = useState("")
  const [searched, setSearched] = useState("")
  

  const handleSearch = async (event) => {
    event.preventDefault();
    updateSearch(tempQuery)
  }

  const updateSearch = (query) => {
    setSearchQuery(query);
    setSearched("searched")
  }

  return (
    <div className="container text-center bg-opacity-75 rounded padding-bottom" id = "search-box" >
      <div className="row text-center" id="tell-me-about">
        <h2>Tell me about...</h2>
      </div>
      <div className="row text-center m-3">
        <form className="row form-inline mb-3" noValidate onSubmit={handleSearch}>
          <div className="col-md-3"></div>
          <div className="col-12 col-md-6 ">
            <input className="form-control mx-auto" type="search" placeholder="Find a city..." aria-label="Search" value = {tempQuery} onChange = {(e) => setTempQuery(e.target.value)}/>
          </div>
          <button className="col-md-2 col-4 mx-auto mx-md-0 btn my-2 my-md-0 overflow-hidden" type="submit" id="search-button">
            Search
          </button>
        </form>
        {searched && 
          <SearchResult searchQuery={searchQuery}/>
        }
      </div>
    </div>

  )
}

export default SearchBox