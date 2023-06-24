import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import İmages from './Components/İmages'
import Shop from './Components/Shop'
import Homepage from './Components/Homepage'
import Footer from "./Components/Footer";
import './Style/Responsive.css'


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path="/Images" element={<İmages />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
