import React, { Component } from 'react';
import Header from './header/Header.js';
import Portfolio from './portfolio/Portfolio.js';
import Contact from './contact/Contact.js';
import './App.css';
import './libs/css/normalize.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();

    this.setState(prevState => ({
      isMenuActive: !prevState.isMenuActive
    }));

    document.body.classList.toggle('menu-open', !this.state.isMenuActive);

    if (!this.state.isMenuActive) {
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <div className="App">
        <Header isMenuActive={this.state.isMenuActive} toggleMenu={this.toggleMenu}></Header>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
