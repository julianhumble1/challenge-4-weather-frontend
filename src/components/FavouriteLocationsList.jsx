import React from 'react'

import SavedLocationLink from './SavedLocationLink/SavedLocationLink.jsx'
import FavLocationUtils from "../utils/FavLocationUtils.js"

const FavouriteLocationsList = ({ loggedIn }) => {

  const favouriteLocationsList = FavLocationUtils.getUsersFavouriteLocations(loggedIn)

  return (
  <>
      {favouriteLocationsList.length === 0 &&
        <h2 className = "pt-5">No saved locations currently</h2>
    }
    <div className="row">
      <div className="container rounded col-10 row mx-auto" id="saved-locations">
        {favouriteLocationsList && (
          favouriteLocationsList.map(locationId => (
            <SavedLocationLink key={locationId} locationId={locationId} loggedIn = {loggedIn} />
          ))
        )}
      </div>
      </div>
    </>
  )
}

export default FavouriteLocationsList