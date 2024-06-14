import ToggleFavourite from "../ClickFavourite/ToggleFavourite.jsx"

import WeatherTodayTile from "../WeatherTodayTile/WeatherTodayTile.jsx";
import FutureDayTile from "../FutureDayTile/FutureDayTile.jsx";

import "./LocationShowcase.css"

import WeatherDataService from "../../services/weatherDataService.js";
import WeatherResponseFormatter from "../../utils/weatherResponseFormatter.js";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationShowcase = ({ setRenderHeaderSearch, loggedIn }) => {
  
  const locationID = useParams().id;
  const [cityInfo, setCityInfo] = useState();
  const [cityForecast, setCityForecast] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  
  useEffect(() => {
    setRenderHeaderSearch(true);
  }, [setRenderHeaderSearch])
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await WeatherDataService.getLocationDataById(locationID);
        const { cityInfo, cityForecast } = WeatherResponseFormatter.getResponseSummary(response);
        setCityInfo(cityInfo)
        setCityForecast(cityForecast)
      } catch (err) {
        setError("Failed to find data. Please try again or try a different city.")
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [locationID])

  return (
    <div>
      <div className="container text-center bg-opacity-75 rounded" id="location-showcase">
        {error &&
          <div>
            <h3>{error}</h3>
          </div>
        }
        {loading && 
          <div>
            <h3>Loading weather data...</h3>
          </div>
        }
        {(!loading && !error) &&
          <>
            <div className="row">
              <h3>Telling you about...</h3>
            </div>
            <div className="row">
              <h2>{cityInfo.name}</h2>
            </div>
          <div className="row">
            {loggedIn &&
              <ToggleFavourite
                loggedIn={loggedIn}
                locationID = {locationID}
              />
            }
            </div>
            <div className="row">
              <WeatherTodayTile todayDetails={cityForecast[0]} />
            </div>
            <div className="row justify-content-center">
              <FutureDayTile futureDayDetails={cityForecast[1]} />
              <FutureDayTile futureDayDetails={cityForecast[2]} />
              <FutureDayTile futureDayDetails={cityForecast[3]} />
              <FutureDayTile futureDayDetails={cityForecast[4]} />
            </div>
          </>
        }
        </div>
    </div>
  )    
}

export default LocationShowcase