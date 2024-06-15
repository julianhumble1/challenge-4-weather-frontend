import "./SavedLocationLink.css"

import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

import WeatherDataService from "../../services/weatherDataService.js"
import WeatherResponseFormatter from "../../utils/weatherResponseFormatter.js"

import FavLocationUtils from "../../utils/FavLocationUtils.js"

const SavedLocationLink = ({ locationId, loggedIn}) => {

  const [unbookmarked, setUnbookmarked] = useState(false)
  const [cityInfo, setCityInfo] = useState("")
  
  const obtainCityInfo = async (locationId) => {
    const response = await WeatherDataService.getLocationDataById(locationId);
    const { cityInfo } = await WeatherResponseFormatter.getResponseSummary(response)
    return cityInfo
  }

  const handleUnBookmark = () => {
    FavLocationUtils.removeLocationFromFavourites(cityInfo.id, loggedIn)
    setUnbookmarked(true)
  }

  const handleReBookmark = () => {
    FavLocationUtils.addLocationToFavourites(cityInfo.id, loggedIn)
    setUnbookmarked(false)
  }

  useEffect(() => {
    const fetchCityInfo = async () => {
      const info = await obtainCityInfo(locationId);
      setCityInfo(info);
    }
  fetchCityInfo();
  }, [locationId])

  return (
      <div className="container col-lg-4 col-md-6 col-12">
        <div className="row align-items-center justify-content-center">
          {!unbookmarked &&
          <button className="col-2 px-0  btn" id="un-bookmark-button">
            <img src="assets/bookmarks-fill.svg" alt="" id="list-un-bookmark-button" onClick={handleUnBookmark} />
          </button>
          }
          {unbookmarked &&
          <button className="col-2 px-0  btn" id="bookmark-button">
            <img src="assets/bookmarks.svg" alt="" id = "list-bookmark-button" onClick={handleReBookmark}/>
          </button>
          }
          <Link to={`/location/${cityInfo.id}`} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover col-auto px-0 text-start">{cityInfo.name}</Link>
        </div>
    </div>
  )
}

export default SavedLocationLink