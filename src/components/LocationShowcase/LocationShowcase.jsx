import ClickToFavourite from "../ClickFavourite/ClickToFavourite.jsx"
import ClickToUnfavourite from "../ClickFavourite/ClickToUnfavourite.jsx";
import WeatherTodayTile from "../WeatherTodayTile/WeatherTodayTile.jsx";
import FutureDayTile from "../FutureDayTile/FutureDayTile.jsx";

import "./LocationShowcase.css"

import WeatherDataService from "../../services/weatherDataService.js";
import WeatherResponseFormatter from "../../utils/weatherResponseFormatter.js";

const response = WeatherDataService.getLocationDataByName("london");
const { cityInfo, cityForecast } = WeatherResponseFormatter.getResponseSummary(response);
// const cityInfo = serviceResponse.

const LocationShowcase = () => {
  const favourited = true;

    if (favourited) {
        return (
          <div>
              <div className="container text-center bg-opacity-75 rounded" id = "location-showcase">
                <div className="row">
                  <h3>Telling you about...</h3>
                </div>
                <div className="row">
                <h2>{ cityInfo.name}</h2>
                </div>
                <div className="row">
                    <ClickToUnfavourite />
                </div>
                <div className="row">
                <WeatherTodayTile todayDetails={cityForecast[0]} />
                </div>
                <div className="row justify-content-center">
                  <FutureDayTile futureDayDetails={cityForecast[1]} /> 
                  <FutureDayTile futureDayDetails={cityForecast[2]}/> 
                  <FutureDayTile futureDayDetails={cityForecast[3]}/> 
                  <FutureDayTile futureDayDetails={cityForecast[4]}/> 
                </div>
            </div>
        </div>
      )
    } else {
        return (
          <div>
              <div className="container text-center bg-opacity-75 rounded" id = "location-showcase">
                <div className="row">
                  <h3>Telling you about...</h3>
                </div>
                <div className="row">
                  <h2>Place Name</h2>
                </div>
                <div className="row">
                  <ClickToFavourite />
                </div>
                <div className="row">
                  <WeatherTodayTile />
                </div>
                <div className="row justify-content-center">
                  <FutureDayTile /> 
                  <FutureDayTile /> 
                  <FutureDayTile /> 
                  <FutureDayTile /> 
                </div>
              
              </div>
        </div>
      )
    }
}

export default LocationShowcase