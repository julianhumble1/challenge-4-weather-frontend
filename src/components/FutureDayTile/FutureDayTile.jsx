import "./FutureDayTile.css"

const FutureDayTile = () => {
  return (
    <>
      <div className="col-md-2 col-4" id="future-day-tile">
        <div className=" w-100 text-center text-wrap">FutureDayTile</div>
        <div className="row justify-content-center">
          <img className = "col-6" src="assets/weather-icons/03d.svg" alt="" />
        </div>
        <div className="text-center">X°C</div>
        <div className="text-wrap text-center">Weather Description</div>
      </div>
    </>
  )
}

export default FutureDayTile