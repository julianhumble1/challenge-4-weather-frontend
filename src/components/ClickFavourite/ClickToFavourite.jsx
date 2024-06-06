import "./ClickFavourite.css"

const ClickToFavourite = () => {
    return (
      <div className="container">        
        <button className = "btn" id = "add-to-fav">
        <img src="assets/bookmarks.svg" alt="bookmark-icon" id = "icon" className = "filter-green"/> Click to add to favourites
        </ button>
    </div>
  )
}

export default ClickToFavourite