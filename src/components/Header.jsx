import SavedLocationsDropdown from "./SavedLocationsDropdown.jsx";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/logo.webp" alt="Logo" width="60" height="48" />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <SavedLocationsDropdown />
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Header;
