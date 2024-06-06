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
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#" >Home</a>
                            </li>
                        <SavedLocationsDropdown />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Header;
