import React from 'react'

import SearchResult from "./SearchResult/SearchResult.jsx"

import WeatherDataService from '../services/weatherDataService.js'
import WeatherResponseFormatter from '../utils/weatherResponseFormatter.js'

const response = await WeatherDataService.getLocationDataByName("london");
const { cityInfo, cityForecast } = WeatherResponseFormatter.getResponseSummary(response);


const SearchResults = () => {
  return (
      <div>
        <SearchResult cityInfo={cityInfo} />
        <SearchResult cityInfo={cityInfo}/>
        <SearchResult cityInfo={cityInfo}/>
      </div>
  )
}

export default SearchResults