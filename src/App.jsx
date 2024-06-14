import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer.jsx";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import LocationShowcase from "./components/LocationShowcase/LocationShowcase.jsx";
import FavouriteLocations from "./components/FavouriteLocations/FavouriteLocations.jsx"
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import RegistrationScreen from "./components/RegistrationScreen/RegistrationScreen.jsx";
import { useState } from "react";
import UserHandler from "./utils/UserHandler.js";

const App = () => {

  const [renderHeaderSearch, setRenderHeaderSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [loggedIn, setLoggedIn] = useState("")

  UserHandler.addUserToLocalStorage("email@email.com", "password1!")

  return (
      <div>
        <div className="background-image d-none d-md-block"></div>
        <div className = "background-placeholder d-md-none"></div>
      <Header renderHeaderSearch={renderHeaderSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          <Routes>
            <Route
              path="/"
          element={<SearchBox setRenderHeaderSearch={setRenderHeaderSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}
            />
            <Route
              path = "/saved-locations"
              element={<FavouriteLocations setRenderHeaderSearch={setRenderHeaderSearch} />}
            />
            <Route
              path="location/2643743"
              element = {<LocationShowcase setRenderHeaderSearch={setRenderHeaderSearch}/>}
            />
            <Route
              path="login-screen"
              element = {<LoginScreen loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }
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
