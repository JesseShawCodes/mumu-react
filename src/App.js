import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Components
import Banner from './banner';
import Directions from './directions';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Directions />
        <Footer />
      </div>
    );
  }
}

export default App;
