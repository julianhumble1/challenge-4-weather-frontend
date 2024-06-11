import "./SavedLocationLink.css"

import { Link } from "react-router-dom"

const SavedLocationLink = ({ cityInfo}) => {
  return (
      <div className="container col-lg-4 col-md-6 col-12">
          {/* <img src="assets/bookmarks-fill.svg" id = "list-bookmark-icon"></img> */}
          <div className="row align-items-center justify-content-center">
            <button className="col-2 px-0 btn" id = "bookmark-button">
              <img src="assets/bookmarks-fill.svg" alt="" id="list-bookmark-icon"/>
            </button>
            <Link to={`/location/${cityInfo.id}`} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover col-auto px-0 text-start">{cityInfo.name}</Link>
        </div>
    </div>
  )
}

export default SavedLocationLink