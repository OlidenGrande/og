import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;