import "./ClickFavourite.css"

const ClickToUnfavourite = () => {
    return (
      <div className="container">        
        <button className = "btn" id = "add-to-fav">
        <img src="/assets/bookmarks-fill.svg" alt="bookmark-icon" id = "icon" className = "filter-green"/> Click to remove from favourites
        </ button>
    </div>
  )
}

export default ClickToUnfavourite