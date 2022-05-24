// import logo from "./Pages/logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./Pages/About";
import Footer from "./components/Footer";
import Calc from "./Pages/Calc";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<AboutPage />} />
          <Route path={"/Pages/About"} element={<AboutPage />} />
          <Route path={"/Pages/Calc"} element={<Calc />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
