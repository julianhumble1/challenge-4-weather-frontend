import "./SearchResult.css"

import { Link } from "react-router-dom"

const SearchResult = ({cityInfo}) => {
  return (
      <>
        <div className="row">
        <div className = "col-2"></div>
              <div className="col-8 py-3 my-2 text-start " id = "result-box">
                  <Link to={`/location/${cityInfo.id}`} className="link-underline-dark text-dark">{cityInfo.name}</Link>
            </div>
        </div>
    </>
  )
}

export default SearchResult