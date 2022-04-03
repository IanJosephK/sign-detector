import "./App.css";
import AboutUs from "./AboutUs";
import Home from "./Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signs from "./Signs";
import Detector from "./Detector";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Signs" element={<Signs />} />
          <Route path="/Detector" element={<Detector />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
