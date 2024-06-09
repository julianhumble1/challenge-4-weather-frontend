import "./SavedLocationsDropdown.css"

import SavedLocation from "../SavedLocation.jsx";

const SavedLocationsDropdown = () => {
  return (
    <div className = "dropdown-center align-items-center">
      <button className="nav-link dropdown-toggle d-none d-md-block" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </button>
        {/* Saved Locations */}
        <ul className="dropdown-menu" >
            <SavedLocation />
            <SavedLocation />
        </ul>
    </div>
  )
}

export default SavedLocationsDropdown;