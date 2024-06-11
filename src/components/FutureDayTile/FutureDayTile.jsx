import "./FutureDayTile.css"

import WeatherDataFormatter from "../../utils/weatherDataFormatter.js";

const FutureDayTile = ({ futureDayDetails }) => {
  
  const { date, weather_desc, icon, temp } = futureDayDetails;

  const formattedDate = WeatherDataFormatter.formatDate(date)
  const formattedDesc = WeatherDataFormatter.formatDescription(weather_desc)
  const iconPath = WeatherDataFormatter.formatIconPath(icon)
  const formattedTemp = WeatherDataFormatter.formatTemp(temp)

  return (
    <>
      <div className="col-md-2 col-4" id="future-day-tile">
        <div className=" w-100 text-center text-wrap">{formattedDate}</div>
        <div className="row justify-content-center">
          <img className = "col-6" src={iconPath}alt="" />
        </div>
        <div className="text-center">{formattedTemp}</div>
        <div className="text-wrap text-center">{formattedDesc}</div>
      </div>
    </>
  )
}

export default FutureDayTile