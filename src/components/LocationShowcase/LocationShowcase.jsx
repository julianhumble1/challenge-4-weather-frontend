import ClickToFavourite from "../ClickFavourite/ClickToFavourite.jsx"
import ClickToUnfavourite from "../ClickFavourite/ClickToUnfavourite.jsx";
import "./LocationShowcase.css"


const LocationShowcase = () => {
    const favourited = true;
    if (favourited) {
        return (
          <div>
              <div className="container text-center bg-opacity-75 rounded" id = "location-showcase">
                  <div className="row">
                      <h3>Telling you about...</h3>
                  </div>
                  <div className="row">
                      <h2>Place Name</h2>
                  </div>
                    <div className="row">
                      <ClickToUnfavourite />
                  </div>
              </div>
        </div>
      )
    } else {
        return (
          <div>
              <div className="container text-center bg-opacity-75 rounded" id = "location-showcase">
                  <div className="row">
                      <h3>Telling you about...</h3>
                  </div>
                  <div className="row">
                      <h2>Place Name</h2>
                  </div>
                    <div className="row">
                      <ClickToFavourite />
                  </div>
              </div>
        </div>
      )
    }
}

export default LocationShowcase