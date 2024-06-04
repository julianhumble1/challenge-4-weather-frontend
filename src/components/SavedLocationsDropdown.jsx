import SavedLocation from "./SavedLocation.jsx";

const SavedLocationsDropdown = () => {
  return (
    <div className = "dropdown-center">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Saved Locations
        </a>
        {/* Saved Locations */}
        <ul className="dropdown-menu">
            <SavedLocation />
            <SavedLocation />
        </ul>
    </div>
  )
}

export default SavedLocationsDropdown;