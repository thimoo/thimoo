import React, { Component } from 'react';
import Header from './header/Header.js';
import Portfolio from './portfolio/Portfolio.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
