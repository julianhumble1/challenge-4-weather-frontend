import "./WeatherTodayTile.css"

const WeatherTodayTile = () => {
  return (
    <div className="container mx-auto col-9 rounded" id="weather-today">
        <div className="row text-md-center text-start" >
            <h4>Today's Weather</h4>
        </div>
        <div className="row text-md-center text-start">
            <p>Day Month Year</p>
        </div>
      <div className="row">
          <img src="assets/weather-icons/01d.svg" className="col-6 col-md-4 img-fluid" alt="" id="day-0-icon" />
        <div className="col-md-8 col-6">
          <div className="row h-100">
            <h3 className=" col-md-4 col-12 my-auto pb-3 pb-md-0 ">X°C</h3>
            <div className=" col-md-8 col-12 my-md-auto">Weather Description</div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherTodayTile