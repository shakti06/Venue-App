import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo/index";
import Highlight from "./components/highlights";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

import "./resources/styles.css";
class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          height: "1500px",
          background: "grey"
        }}
      >
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venue-info">
          <VenueNfo />
        </Element>

        <Element name="highlight">
          <Highlight />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
