import FavLocationUtils from "../utils/FavLocationUtils.js";
import LocationDropdownLink from "./LocationDropdownLink.jsx";

const SavedLocationsDropdown = ({ loggedIn }) => {
  
  const favouriteLocationsList = FavLocationUtils.getUsersFavouriteLocations(loggedIn)

  return (
    <>
      {favouriteLocationsList.length > 0 &&
      <div className = "dropdown-center align-items-center">
        <button className="nav-link dropdown-toggle d-none d-md-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        <ul className="dropdown-menu" >
            {
              favouriteLocationsList.map(locationId => (
                <LocationDropdownLink key = {locationId} locationId={locationId} /> 
              ))
            }
        </ul>
      </div>
    }
    </>
  )
}

export default SavedLocationsDropdown;