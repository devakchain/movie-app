import React from "react";
import Home from "./pages/Home";
import VodInput from "./components/Vodinput";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<MovieInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
