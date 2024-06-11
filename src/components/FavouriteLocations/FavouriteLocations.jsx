import FavouriteLocationsList from "../FavouriteLocationsList.jsx"
import "./FavouriteLocations.css"

const FavouriteLocations = () => {
  return (
      <div className="container text-center bg-opacity-75 rounded" id="favourite-locations">
        <div className="row">
            <h3>Telling you about...</h3>
        </div>
        <div className="row">
            <h2>Your Favourite Locations</h2>
        </div>
        <div className="row align-items-center" id = "click-info">
              Click
              <img src="/assets/bookmarks-fill.svg" id = "bookmark-icon"></img>
              to remove from favourites
        </div>
        <div className="row justify-content-center">
              Click name to view info
        </div>
        <FavouriteLocationsList />
      </div>
  )
}

export default FavouriteLocations