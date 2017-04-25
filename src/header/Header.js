import React, { Component } from 'react';
import { Link } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import MtSvgLines from 'react-mt-svg-lines';

import logo from '../assets/logo-white.svg';
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
            <QueueAnim key="1" className="Header-Title" duration={1000} interval={300}>
              <div key="1" className="Header-Title__Intro">notre <span>réveil</span> sonne au petit <span>matin</span> pour</div>
              <div key="2" className="Header-Title__Baseline"><span>façonner</span>&nbsp;vos<br/><span>solutions</span>&nbsp;digitales</div>
              <div key="3" className="Header-Title__Clock">
                <MtSvgLines animate={ true } duration={ 900 }>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.65 170.76">
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M1.25 47.21H252.4v109.08H1.25z"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M11.07 57.75h111.5v88H11.07z"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M131.07 57.75h111.5v88h-111.5z"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M28.16 161.95v7.56H16.83v-7.56"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M100.15 41.55v-7.56h45.32v7.56"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M236.82 161.95v7.56h-11.33v-7.56"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M16.82 97.75v10"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M116.82 97.75v10"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M137.82 97.75v10"/>
                    <path stroke="#b3b3b3" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M235.82 97.75v10"/>
                    <path fill="#cc5e25" d="M31.23 103.81c0-16 6.65-26.81 15.61-26.81 10.29 0 15.05 13.37 15.05 24 0 16-6 24.85-15 24.85-11.32.01-15.66-13.57-15.66-22.04zm22.47 14.56c1.54-3.36 2.17-8.68 2.17-18.9s-3.5-20-9.45-20c-2.73 0-4.69 1-6.3 4.2-2.52 4.9-2.8 13.09-2.8 18.9 0 6.65.84 11.55 2.38 14.77 2.17 4.62 4.83 6 7.28 6 2.17 0 4.83-.84 6.72-4.97z"/>
                    <path fill="#cc5e25" d="M79 94.71a37.23 37.23 0 0 1 8 .77c6.86 1.82 10.78 6.72 10.78 13 .07 10-8.12 17.36-17.64 17.36-5.18 0-9.1-1.89-9.1-3.92a1.67 1.67 0 0 1 1.54-1.82 7.27 7.27 0 0 1 3.5 1.4 12.56 12.56 0 0 0 5.53 1.33 11.09 11.09 0 0 0 10.92-10.78c0-4.9-1.61-8.75-6.16-10.71a19 19 0 0 0-9.1-1.54 1.63 1.63 0 0 1-1.27-.12c-.35-.14-.42-.35-.35-.77l2.52-19.74c.07-.84.21-1.12 1.12-1.12h15c2.45 0 3.08-1.19 4.27-3.5a.57.57 0 0 1 .84-.35c.77.35 1.12.42 1 .84l-2.52 7c-.49 1.12-.84 1.4-3 1.4H80.23z"/>
                    <path fill="#cc5e25" d="M174.32 124.81c-.63 0-.84-.14-.84-.77v-12.32h-19.54c-.63 0-1.05-.28-1.05-.84s.21-.7.7-1.4l22.75-31.36c.42-.56 1-1.12 1.54-1.12s.91.49.91 2.1v28h5.67c.49 0 .84.14.84.56V111c0 .42-.21.7-1.12.7h-5.38v12.11c0 .77-.14 1-1 1zm-.77-36.61c0-1.12-.7-1.33-1.33-.42l-12.88 17.78c-.84 1.19-.77 1.89.49 1.89h13.72z"/>
                    <path fill="#cc5e25" d="M200.47 94.71a37.23 37.23 0 0 1 8 .77c6.86 1.82 10.78 6.72 10.78 13 .07 10-8.12 17.36-17.64 17.36-5.18 0-9.1-1.89-9.1-3.92a1.67 1.67 0 0 1 1.54-1.82 7.27 7.27 0 0 1 3.5 1.4 12.56 12.56 0 0 0 5.53 1.33A11.09 11.09 0 0 0 214 112.07c0-4.9-1.61-8.75-6.16-10.71a19 19 0 0 0-9.1-1.54 1.63 1.63 0 0 1-1.26-.14c-.35-.14-.42-.35-.35-.77l2.52-19.74c.07-.84.21-1.12 1.12-1.12h15c2.45 0 3.08-1.19 4.27-3.5a.57.57 0 0 1 .84-.35c.77.35 1.12.42 1 .84l-2.52 7c-.49 1.12-.84 1.4-3 1.4h-14.63z"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M85.07 36.25h-16"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M88 27.25l-13.86-8"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M96.07 21.18l-8-13.86"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M104.07 17.25v-16"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M159.07 37.25h16"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M156.14 28.25l13.86-8"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M148.07 22.18l8-13.86"/>
                    <path stroke="#cc5e25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.5px" d="M140.07 18.25v-16"/>
                  </svg>
                </MtSvgLines>
              </div>
            </QueueAnim>
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
