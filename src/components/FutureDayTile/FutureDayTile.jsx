import "./FutureDayTile.css"

import WeatherDataUtils from "../../utils/weatherDataUtils.js";

const FutureDayTile = ({ futureDayDetails }) => {
  
  const { date, weather_desc, icon, temp } = futureDayDetails;

  const formattedDate = WeatherDataUtils.formatDate(date)
  const formattedDesc = WeatherDataUtils.formatDescription(weather_desc)
  const iconPath = WeatherDataUtils.formatIconPath(icon)
  const formattedTemp = WeatherDataUtils.formatTemp(temp)

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