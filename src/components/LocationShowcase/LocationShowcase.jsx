import ClickToFavourite from "../ClickFavourite/ClickToFavourite.jsx"
import ClickToUnfavourite from "../ClickFavourite/ClickToUnfavourite.jsx";
import WeatherTodayTile from "../WeatherTodayTile/WeatherTodayTile.jsx";
import FutureDayTile from "../FutureDayTile/FutureDayTile.jsx";

import "./LocationShowcase.css"

import dublinForecast from "../../dublinData.js";

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
                  <h2>Place Name</h2>
                </div>
                <div className="row">
                    <ClickToUnfavourite />
                </div>
                <div className="row">
                <WeatherTodayTile todayDetails={dublinForecast[0]} />
                </div>
                <div className="row justify-content-center">
                  <FutureDayTile futureDayDetails={dublinForecast[1]} /> 
                  <FutureDayTile futureDayDetails={dublinForecast[2]}/> 
                  <FutureDayTile futureDayDetails={dublinForecast[3]}/> 
                  <FutureDayTile futureDayDetails={dublinForecast[4]}/> 
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