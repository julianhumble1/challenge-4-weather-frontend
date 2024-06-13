import "./SearchResult.css"

import { Link } from "react-router-dom"

import React, {useState, useEffect} from 'react'

import WeatherDataService from "../../services/weatherDataService.js"
import WeatherResponseFormatter from "../../utils/weatherResponseFormatter.js"


const SearchResult = ({ searchQuery }) => {

  const [cityInfo, setCityInfo] = useState("");
  const [validSearch, setValidSearch] = useState("")

  // const response = await WeatherDataService.getLocationDataByName(searchQuery);
  // const { cityInfo } = WeatherResponseFormatter.getResponseSummary(response);

  useEffect(() => {
    const fetchData = async () => {
      const response = await WeatherDataService.getLocationDataByName(searchQuery);
      if (response.status === 200) {
        const summary = WeatherResponseFormatter.getResponseSummary(response);
        setValidSearch("valid")
        setCityInfo(summary.cityInfo);       
      } else {
        setValidSearch("invalid")
      }
    }

    fetchData();
  }, [searchQuery])

  return (
    <>
        <div className="row justify-content-center">
          <div className="col-8 py-3 my-2 text-start " id="result-box">
            {validSearch === "valid" &&
              <Link to={`/location/${cityInfo.id}`} className="link-underline-dark text-dark">{cityInfo.name}</Link>
            }
            {(validSearch === "invalid") &&
              <div className="container text-danger">Failed to find matching result. Please try again.</div>
            }
          </div>
        </div>
    </>
  )
}

export default SearchResult