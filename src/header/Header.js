import React, { Component } from 'react';
import ScrollAnim, { Link } from 'rc-scroll-anim';
import logo from '../assets/logo-white.svg';
import menu from '../assets/menu.svg';
import clock from '../assets/clock.svg';
import arrow from '../assets/arrow.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Content">
          <div className="Header-Top">
            <div className="Header-Top__Logo">
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="Header-Top__Menu">
              <a href="#"><img src={menu} alt="Logo" /></a>
            </div>
          </div>
          <div className="Header-Title">
            <div className="Header-Title__Intro">notre <span>réveil</span> sonne au petit <span>matin</span> pour</div>
            <div className="Header-Title__Baseline"><span>façonner</span> vos<br/> <span>solutions</span> digitales</div>
            <div className="Header-Title__Clock"><img src={clock} alt="Clock" /></div>
          </div>
          <div className="Header-Bottom">
            <div className="Header-Bottom__Arrow">
              <Link to="Portfolio"><img src={arrow} alt="Arrow" /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
