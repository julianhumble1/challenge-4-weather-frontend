import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer.jsx";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import LocationShowcase from "./components/LocationShowcase/LocationShowcase.jsx";


const App = () => {
    const homePage = false;
    const locationPage = true;

    if (homePage ){
        return (
            <>
                {/* <img className = "background-image d-none d-md-block" src="/assets/palm-trees.jpg" /> */}
                <div className="background-image d-none d-md-block"></div>
                <div className = "background-placeholder d-md-none"></div>
                <Header />
                <SearchBox />
                <Footer />
            </>
        );
    } else if (locationPage) {
        return (
            <>
                {/* <img className = "background-image d-none d-md-block" src="/assets/palm-trees.jpg" /> */}
                <div className="background-image d-none d-md-block"></div>
                <div className = "background-placeholder d-md-none"></div>
                <Header />
                <LocationShowcase />
                <Footer />
            </>
        );
    }
};

export default App;
