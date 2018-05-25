import React, { Component } from 'react';
import Header from './header/Header.js';
import Portfolio from './portfolio/Portfolio.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';
import './App.css';
import './libs/css/normalize.css';
import CookieConsent from "react-cookie-consent";
var scrollToElement = require('scroll-to-element');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false,
      isPolitiquedeconfidentialiteActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.togglePolitiquedeconfidentialite = this.togglePolitiquedeconfidentialite.bind(this);
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
  
  togglePolitiquedeconfidentialite(e) {
    e.preventDefault();

    this.setState(prevState => ({
      isPolitiquedeconfidentialiteActive: !prevState.isPolitiquedeconfidentialiteActive
    }));

    document.body.classList.toggle('Politiquedeconfidentialite-open', !this.state.isPolitiquedeconfidentialiteActive);
    
    if (!this.state.isPolitiquedeconfidentialiteActive) {
      // with options
      setTimeout(function() {
        scrollToElement('#Politiquedeconfidentialite', {
            offset: 0,
            ease: 'linear',
            duration: 350
        });
      },
      251)
    }
  }

  render() {
    return (
      <div className="App">
        <CookieConsent
        location="bottom"
        buttonText="Accepter"
        cookieName="myAwesomeCookieName2"
        disableStyles="true"
        >
          <span>Ce site Web utilise des cookies pour améliorer l'expérience de l'utilisateur. En continuant à utiliser le site, vous acceptez l’utilisation des cookies.</span>
        </CookieConsent>
        <Header isMenuActive={this.state.isMenuActive} toggleMenu={this.toggleMenu}></Header>
        <Portfolio></Portfolio>
        <Contact isPolitiquedeconfidentialiteActive={this.state.isPolitiquedeconfidentialiteActive} togglePolitiquedeconfidentialite={this.togglePolitiquedeconfidentialite}></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
