import React from "react";
import Carausel from "./components/Carausel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carausel/>
      <Footer/>
    </div>
  );
}

export default App;
