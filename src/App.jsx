import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";

import "./App.css";
import SearchBox from "./components/SearchBox.jsx";

const App = () => {
    return (
        <>
            {/* <img className = "background-image d-none d-md-block" src="/assets/palm-trees.jpg" /> */}
            <div className = "background-image d-none d-md-block"></div>
            <Header />
            <SearchBox />
            <Footer />
        </>
    );
};

export default App;
