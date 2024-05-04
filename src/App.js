import './App.css';
import About from './Components/About/about.html';
import Dashboard from './Components/Dashboard/dashboard.html';
import Fotter from './Components/Fotter/fotter.html';
import Gallery from './Components/Gallery/gallery.html';
import Home from './Components/Home/home.html';
import Members from './Components/Members/members.html';
import Navbar from './Components/NavBar/navbar';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home /> } />
        </Routes>
        <Routes>
        <Route path="/about" element={<About/>} />
        </Routes>
        <Routes>
        <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <Routes>
        <Route path="/members" element={<Members/>} />
        </Routes>
        <hr style={{height:"3px" , borderWidth:"0" , backgroundColor: "black"}}/>
        <Fotter />
      </Router>
    </>
  );
}

export default App;
