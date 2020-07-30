import React from "react";
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';

import Footer from '../components/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={ContactForm}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
