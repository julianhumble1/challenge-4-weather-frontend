import React, {useEffect, useState} from 'react'

import SavedLocationLink from './SavedLocationLink/SavedLocationLink.jsx'
import FavLocationUtils from "../utils/FavLocationUtils.js"

import WeatherDataService from '../services/weatherDataService.js'
import WeatherResponseFormatter from '../utils/weatherResponseFormatter.js'

// const response = await WeatherDataService.getLocationDataByName("london");
// const { cityInfo } = WeatherResponseFormatter.getResponseSummary(response);
// console.log(cityInfo)

const FavouriteLocationsList = ({ loggedIn }) => {

  const favouriteLocationsList = FavLocationUtils.getUsersFavouriteLocations(loggedIn)

  return (
  <>
      {!favouriteLocationsList &&
        <h2 className = "pt-5">No saved locations currently</h2>
    }
    <div className="row">
      <div className="container rounded col-10 row mx-auto" id="saved-locations">
        {favouriteLocationsList && (
          favouriteLocationsList.map(locationId => (
            <SavedLocationLink key={locationId} locationId={locationId} />
          ))
        )}
      </div>
      </div>
    </>
  )
}

export default FavouriteLocationsList