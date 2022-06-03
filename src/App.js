import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import WelcomePage from "./Pages/WelcomePage";
import ContactUs from "./Pages/ContactUs";
import LocateUs from "./Pages/LocateUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/locate-us" element={<LocateUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
