import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import SavedLocationsDropdown from "../SavedLocationsDropdown.jsx";
import HeaderSearchBar from "../HeaderSearchBar.jsx";

const homePage = true;

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
                            <Link to = "/">
                                <li className="nav-item">
                                    <div className="nav-link" aria-current="page" href="#" >Home</div>
                                </li>
                            </Link>
                            <Link to = "/saved-locations">
                                <li className="nav-item ">
                                    <div className="nav-link" aria-current="page" href="#" >My Saved Locations</div>
                                </li>
                            </Link>
                            <SavedLocationsDropdown />
                        </ul>
                        <HeaderSearchBar />      
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;
