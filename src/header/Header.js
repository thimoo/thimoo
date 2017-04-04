import React, { Component } from 'react';
import ScrollAnim, { Link } from 'rc-scroll-anim';
import logo from '../assets/logo-white.svg';
import menu from '../assets/menu.svg';
import clock from '../assets/clock.svg';
import arrow from '../assets/arrow.svg';
import Menu from '../menu/Menu.js';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <section id="Home" className="Header">
        <Menu isOpen={this.props.isMenuActive} toggleMenu={this.props.toggleMenu}></Menu>
        <div className="Header-Content">
          <div className="Header-Top">
            <div className="Header-Top__Logo">
              <Link to="Home"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className={"Header-Top__Menu" + (this.props.isMenuActive ? " active" : "")} onClick={this.props.toggleMenu}>
              <a href="#">
                <div className={"Menu-Button" + (this.props.isMenuActive ? " active" : "")}>
                  <span className="Menu-Button__Top"></span>
                  <span className="Menu-Button__Middle"></span>
                  <span className="Menu-Button__Bottom"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="Header-Title">
            <div className="Header-Title__Intro">notre <span>réveil</span> sonne au petit <span>matin</span> pour</div>
            <div className="Header-Title__Baseline"><span>façonner</span> vos<br/> <span>solutions</span> digitales</div>
            <div className="Header-Title__Clock"><img src={clock} alt="Clock" /></div>
          </div>
          <div className="Header-Bottom">
            <div className="Header-Bottom__Arrow">
              <Link to="Portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.44 22.9">
                  <polyline className="Header-Bottom__Arrow-Path" points="1.25 1.25 29.89 21.37 58.19 1.31"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
