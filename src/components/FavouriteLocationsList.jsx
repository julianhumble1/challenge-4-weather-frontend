import React from 'react'

import SavedLocationLink from './SavedLocationLink/SavedLocationLink.jsx'

const FavouriteLocationsList = () => {
  return (
    <div className="row">
        <div className="container rounded col-10 row mx-auto" id="saved-locations">
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/>
            <SavedLocationLink locationProp = "Dublin"/> 
         </div>
    </div>
  )
}

export default FavouriteLocationsList