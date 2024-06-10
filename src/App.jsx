import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer.jsx";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import LocationShowcase from "./components/LocationShowcase/LocationShowcase.jsx";
import FavouriteLocations from "./components/FavouriteLocations/FavouriteLocations.jsx"

const App = () => {
  return (
      <div>
        <div className="background-image d-none d-md-block"></div>
        <div className = "background-placeholder d-md-none"></div>
          <Header />
          <Routes>
              <Route
                path="/"
                element = {<SearchBox />}
              />
              <Route
                path = "/saved-locations"
                element = {<FavouriteLocations />}
              />
              <Route
                path="location"
                element = {<LocationShowcase />}
              />
          </Routes>
    </div>
  )
}

export default App;
