import React, { Component } from 'react';
import { OverPack as ScrollOverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import MtSvgLines from 'react-mt-svg-lines';
import Footer from '../footer/Footer.js';

import nico from '../assets/employees/thimoo-nico-frei.jpg';
import joel from '../assets/employees/thimoo-joel-gugger.jpg';
import needYou from '../assets/employees/we-need-you.jpg';
import './Contact.css';

const employees = [
  {
    img: nico,
    name: 'Nicolas Frei',
    info1: 'Design &',
    info2: 'Stratégie communication',
    link: null
  },
  {
    img: joel,
    name: 'Joël Gugger',
    info1: 'Web &',
    info2: 'Développement',
    link: null
  },
  {
    img: needYou,
    name: 'Vous',
    info1: 'Développeur Full Stack',
    info2: 'août 2017 (50%)',
    link: 'https://medium.com/@thimoo.ch/d%C3%A9veloppeur-full-stack-50-fcbf520c9fcc'
  }
];

const listEmployees = employees.map((employee) => {
  const img = (employee.img) ? <img src={employee.img} alt={employee.name} /> : null;
  const content = <div className="Contact-Team__Description">
    <h3>{employee.name}</h3>
    <p>{employee.info1}</p>
    <p>{employee.info2}</p>
  </div>;
  const link = (employee.link) ? <a href={employee.link} target="_blanck">{content}</a> : content;
  const wrapper = <div className="Contact-Team__Member"onClick={(e) => {return;}} key={employee.name}>
    <div className="Contact-Team__Img">
      {img}
    </div>
    {link}
  </div>;
  return (
    wrapper
  );
});

class Contact extends Component {

  render() {
    return (
      <section id="Contact" className="Contact">
        <div className="Contact-Wrapper">
          <div className="Contact-Content">

            <ScrollOverPack className="Contact-Title" playScale="0.2">
                <TweenOne key="1" animation={{ opacity: 1 }} style={{ opacity: 0 }}>
                  <div>une&nbsp;petite&nbsp;<span>agence</span>,<br/>de&nbsp;grandes&nbsp;<span>aspirations</span>&nbsp;!</div>
                </TweenOne>
            </ScrollOverPack>

            <div className="Contact-Team">
              {listEmployees}
            </div>
            <div className="Contact-Info">
              <div className="Contact-Info__Tel"><a href="tel:+41797255989">+41&nbsp;79&nbsp;725&nbsp;59&nbsp;89</a></div>
              <div className="Contact-Info__Email"><a href="mailto:info@thimoo.ch">info<span>@</span>thimoo.ch</a></div>
              <div className="Contact-Info__Address">
                <p>thimoo<br/>
                Closel Bourbon 3<br/>
                2075 Thielle-Wavre</p>
              </div>
              <div className="Contact-Info__Map">
                <a target="_blanck"
                  href="https://www.google.ch/maps/place/thimoo/@47.019962,7.0293476,15z/data=!4m5!3m4!1s0x0:0x1a91cecc8c2535a!8m2!3d47.019962!4d7.0293476">
                  <ScrollOverPack replay={true} playScale="0.1">
                    <QueueAnim key="1">
                      <MtSvgLines key="1" animate={ true } duration={ 2000 }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.02 102.8">
                          <path className="Contact-Info__Map-Path" d="M66.85,1.25A20.34,20.34,0,0,0,48.37,30.08L66.85,66.32,85.33,30.08A20.34,20.34,0,0,0,66.85,1.25Zm0,30a9.64,9.64,0,1,1,9.64-9.64,9.65,9.65,0,0,1-9.64,9.64Z"/>
                          <polyline className="Contact-Info__Map-Path" points="77.33 56.85 84.92 62 104.94 46.43 122.41 87.41 94.77 101.39 62.34 84.87 29.32 101.39 1.67 86.46 22.32 46.43 37.26 62 53.72 51.63"/>
                          <line className="Contact-Info__Map-Path" x1="37.26" y1="62" x2="29.32" y2="101.39"/>
                          <line className="Contact-Info__Map-Path" x1="62.34" y1="84.87" x2="62.18" y2="68.62"/>
                          <line className="Contact-Info__Map-Path" x1="84.92" y1="62" x2="94.77" y2="101.39"/>
                        </svg>
                      </MtSvgLines>
                    </QueueAnim>
                  </ScrollOverPack>
                </a>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </section>
    );
  }
}

export default Contact;
