import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import './App.css';
import Footer from "./Footer";

function Home() {
    return (
        <About/>
    )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;