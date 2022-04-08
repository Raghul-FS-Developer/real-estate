import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import About from './components/subcomp/about';
import Apartment from './components/subcomp/apartment';
import Buying from './components/subcomp/buying';
import Commercial from './components/subcomp/commercial';
import Disclaimer from './components/subcomp/disclaimer';
import Renting from './components/subcomp/renting';
import Sell from './components/subcomp/sell';
import Villa from './components/subcomp/villa';
import Register from "./components/subcomp/register";
import Forgot from "./components/subcomp/forgot";
import RegisterConfirm from "./components/subcomp/registerconfirm";
import ForgotConfirm from "./components/subcomp/forgotconfirm";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/apartment" element={<Apartment/>}/>
          <Route path="/buying" element={<Buying/>}/>
          <Route path="/commercial" element={<Commercial/>}/>
          <Route path="/disclaimer" element={<Disclaimer/>}/>
          <Route path="/renting" element={<Renting/>}/>
          <Route path="/sell" element={<Sell/>}/>
          <Route path="/villa" element={<Villa/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/forgot-password" element={<Forgot/>}/>
          <Route path='/register-confirm/:token' element={<RegisterConfirm/>}/>
          <Route path="/forgot-confirm/:token" element={<ForgotConfirm/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
