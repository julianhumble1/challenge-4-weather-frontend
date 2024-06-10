import "./WeatherTodayTile.css"

import WeatherDataUtils from "../../utils/weatherDataUtils.js"

const WeatherTodayTile = ({ todayDetails }) => {

  const { date, weather_desc, icon, temp } = todayDetails;

  const formattedDate = WeatherDataUtils.formatDate(date)
  const formattedDesc = WeatherDataUtils.formatDescription(weather_desc)
  const iconPath = WeatherDataUtils.formatIconPath(icon)
  const formattedTemp = WeatherDataUtils.formatTemp(temp)
  
  return (
    <div className="container mx-auto col-9 rounded" id="weather-today">
        <div className="row text-md-center text-start" >
            <h4>Today's Weather</h4>
        </div>
        <div className="row text-md-center text-start">
            <p>{formattedDate}</p>
        </div>
      <div className="row">
          <img src={iconPath} className="col-6 col-md-4 img-fluid" alt="" id="day-0-icon" />
        <div className="col-md-8 col-6">
          <div className="row h-100">
            <h3 className=" col-md-6 col-12 my-auto pb-3 pb-md-0 ">{formattedTemp}</h3>
            <h4 className=" col-md-6 col-12 my-md-auto">{formattedDesc}</h4>
          </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherTodayTile