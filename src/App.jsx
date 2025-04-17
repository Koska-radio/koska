import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from "./Home"
import Gallery from "./Gallery"
import TrackArchives from "./TrackArchives"

function App() {
  return (
  <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/TrackArchives">TrackArchives</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/TrackArchives" element={<TrackArchives />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
