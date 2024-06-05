import "./SearchBox.css"

const SearchBox = () => {
  return (
      <div className="container text-center bg-secondary bg-gradient bg-opacity-75 rounded" >
          <div className="row text-center">
              <h2>Tell me about...</h2>
          </div>
          <div className="row text-center m-3">
        <form className="row form-inline">
          <div className="col-md-4"></div>
          <div className = "col-md-4 col-12">
            <input className= "form-control" type="search" placeholder="Find a city..." aria-label="Search" />
          </div>
          <button className=" text-light col-md-2 col-4 mx-auto mx-md-0 btn btn-primary btn-outline-dark my-2 my-sm-0" type="submit">
            Search
          </button>
              </form>
      </div>
      <div className="row text-center">
        </div>
    </div>
  )
}

export default SearchBox