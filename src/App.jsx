import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer.jsx";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import LocationShowcase from "./components/LocationShowcase/LocationShowcase.jsx";
import FavouriteLocations from "./components/FavouriteLocations/FavouriteLocations.jsx"
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen.jsx";

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
              path="location/2643743"
              element = {<LocationShowcase />}
            />
            <Route
              path="login-screen"
              element = {<LoginScreen/>}
            />
            <Route
              path="registration-screen"
              element = {<RegistrationScreen/>}
            />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
