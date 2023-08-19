import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service"
import Protfolio from "./components/Protfolio";
import About from "./components/About";
// import ShoppingCartProvider from "../context/ShoppingCartContext";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from "react-bootstrap";



const App = () => {


  return (
    
    
    // <ShoppingCartProvider>
      <>
      <Navbar />
      
        <Routes>
          
          <Route path="/login" element={<Login/>}/> 
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Protfolio" element={<Protfolio/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </>
    // </ShoppingCartProvider>
  
  );
  
  };

export default App;
