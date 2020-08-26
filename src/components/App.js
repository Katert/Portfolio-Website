import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import "../css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    axios
      .get("./data/skills.json")
      .then((response) => {
        this.setState({
          skills: response.data.skills,
        });
      })
      .catch((error) => {
        alert("Something went wrong.\n" + error);
      });
  }

  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route
            path="/skills"
            render={(props) => (
              <Skills {...props} skillsData={this.state.skills} />
            )}
          />
          <Route path="/contact" component={ContactForm} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
