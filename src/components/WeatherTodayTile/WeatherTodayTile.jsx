import "./WeatherTodayTile.css"

import WeatherDataFormatter from "../../utils/weatherDataFormatter.js"

const WeatherTodayTile = ({ todayDetails }) => {

  const { date, weather_desc, icon, temp } = todayDetails;

  const formattedDate = WeatherDataFormatter.formatDate(date)
  const formattedDesc = WeatherDataFormatter.formatDescription(weather_desc)
  const iconPath = WeatherDataFormatter.formatIconPath(icon)
  const formattedTemp = WeatherDataFormatter.formatTemp(temp)
  
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