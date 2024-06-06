import "./WeatherTodayTile.css"

const WeatherTodayTile = () => {
  return (
    <div className="container mx-auto col-6 rounded" id="weather-today">
        <div className="row" >
            <h4>Today's Weather</h4>
        </div>
        <div className="row">
            <p>Day Month Year</p>
        </div>
        <div className="row">
            <img src="assets/weather-icons/01d.svg" className="col-4 img-fluid" alt="" id="day-0-icon" />
            <div className="col-3 my-auto">X°C</div>
            <div className="col-5 my-auto">Weather Description</div>
        </div>
    </div>
  )
}

export default WeatherTodayTile