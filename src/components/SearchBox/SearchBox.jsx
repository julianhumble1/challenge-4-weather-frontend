import "./SearchBox.css"
import SearchResults from "../SearchResults.jsx"

const SearchBox = () => {
  return (
    <div className="container text-center bg-opacity-75 rounded padding-bottom" id = "search-box" >
      <div className="row text-center" id="tell-me-about">
        <h2>Tell me about...</h2>
      </div>
      <div className="row text-center m-3">
        <form className="row form-inline mb-3">
          <div className="col-md-3"></div>
          <div className="col-12 col-md-6 ">
            <input className="form-control mx-auto" type="search" placeholder="Find a city..." aria-label="Search" />
          </div>
          <button className="col-md-2 col-4 mx-auto mx-md-0 btn my-2 my-md-0 overflow-hidden" type="submit" id="search-button">
            Search
          </button>
        </form>
        <SearchResults />
      </div>
    </div>

  )
}

export default SearchBox