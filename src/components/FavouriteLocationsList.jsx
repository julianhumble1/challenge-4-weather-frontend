import React from 'react'

import SavedLocationLink from './SavedLocationLink/SavedLocationLink.jsx'

import WeatherDataService from '../services/weatherDataService.js'
import WeatherResponseFormatter from '../utils/weatherResponseFormatter.js'

const response = WeatherDataService.getLocationDataByName("london");
const { cityInfo, cityForecast } = WeatherResponseFormatter.getResponseSummary(response);

const FavouriteLocationsList = () => {
  return (
    <div className="row">
      <div className="container rounded col-10 row mx-auto" id="saved-locations">
        <SavedLocationLink cityInfo={cityInfo} />
        <SavedLocationLink cityInfo={cityInfo}/>
        <SavedLocationLink cityInfo={cityInfo}/>
        <SavedLocationLink cityInfo={cityInfo}/>
        <SavedLocationLink cityInfo={cityInfo}/>
        <SavedLocationLink cityInfo={cityInfo}/>
        <SavedLocationLink cityInfo={cityInfo}/> 
      </div>
    </div>
  )
}

export default FavouriteLocationsList