import { NavLink } from "react-router-dom";
import "./Header.css";
import SavedLocationsDropdown from "../SavedLocationsDropdown.jsx";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md container-fluid fixed-top" id = "header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo.webp" alt="Logo" width="60" height="48" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <NavLink to = "/">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" >Home</a>
                                </li>
                            </NavLink>
                            <NavLink to = "/saved-locations">
                                <li className="nav-item ">
                                    <a className="nav-link" aria-current="page" href="#" >My Saved Locations</a>
                                </li>
                            </NavLink>
                            <SavedLocationsDropdown />
                        </ul>
                        <form className="d-flex justify-content-between col-md-4 col-12">
                            <input className="form-control me-2" type="search" placeholder="Find a city..." aria-label="Search" />
                            <button className="btn my-2 my-md-0" type="submit" id="search-button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;
