import FavLocationUtils from "../../utils/FavLocationUtils.js"
import "./ToggleFavourite.css"

import { useState } from "react"

const ToggleFavourite = ({ loggedIn, locationID }) => {

  const initialInFavourites = FavLocationUtils.checkLocationInFavourites(locationID, loggedIn)
  
  const [inFavourites, setInFavourites] = useState(initialInFavourites)

  const addFavourite = () => {
    FavLocationUtils.addLocationToFavourites(locationID, loggedIn)
    setInFavourites(true);
  }

  const removeFavourite = () => {
    FavLocationUtils.removeLocationFromFavourites(locationID, loggedIn)
    setInFavourites(false);
  }

  
  if (!inFavourites) {
    return (
      <div className="container">
        <button className="btn" id="add-to-fav" onClick = {addFavourite}>
          <img src="/assets/bookmarks.svg" alt="bookmark-icon" id="icon" className="filter-green" /> Click to add to favourites
        </ button>
      </div>
    )
  } else {
    return (
      <div className="container">        
        <button className = "btn" id = "add-to-fav" onClick = {removeFavourite}>
        <img src="/assets/bookmarks-fill.svg" alt="bookmark-icon" id = "icon" className = "filter-green"/> Click to remove from favourites
        </ button>
    </div>
  )
  }
}
export default ToggleFavourite