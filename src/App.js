import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import AirQuality from './components/AirQuality';
import BikePoint from './components/BikePoint';
import './css/tfl.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header />          
          <Route exact path="/" component={Home} />
          <Route exact path="/airquality" component={AirQuality} />
          <Route exact path="/bikepoint" component={BikePoint} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
