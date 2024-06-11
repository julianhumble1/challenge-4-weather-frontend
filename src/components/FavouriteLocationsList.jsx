import React from 'react'

import SavedLocationLink from './SavedLocationLink/SavedLocationLink.jsx'

import cityData from "../dublinData.js";
const { cityInfo } = cityData

const FavouriteLocationsList = () => {
  return (
    <div className="row">
        <div className="container rounded col-10 row mx-auto" id="saved-locations">
          <SavedLocationLink cityInfo={cityInfo} />
            <SavedLocationLink cityInfo={cityInfo}/>
            <SavedLocationLink cityInfo={cityInfo}/>
            <SavedLocationLink cityInfo={cityInfo}/>
            <SavedLocationLink cityInfo={cityInfo}/>
            <SavedLocationLink cityInfo={cityInfo}/>
            <SavedLocationLink cityInfo={cityInfo}/> 
         </div>
    </div>
  )
}

export default FavouriteLocationsList