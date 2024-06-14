import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import WeatherDataService from "../services/weatherDataService.js";
import WeatherResponseFormatter from "../utils/weatherResponseFormatter.js";

const LocationDropdownLink = ({ locationId }) => {
  
  const [cityInfo, setCityInfo] = useState("")
  
  const obtainCityInfo = async (locationId) => {
    const response = await WeatherDataService.getLocationDataById(locationId);
    const { cityInfo } = await WeatherResponseFormatter.getResponseSummary(response)
    return cityInfo
  }

  useEffect(() => {
    const fetchCityInfo = async () => {
      const info = await obtainCityInfo(locationId);
      setCityInfo(info);
    }
    fetchCityInfo();
  }, [locationId])

  return (
      <Link to={`/location/${cityInfo.id}`}>
        <div className="dropdown-item">{ cityInfo.name}</div>
      </Link>
  )
}

export default LocationDropdownLink