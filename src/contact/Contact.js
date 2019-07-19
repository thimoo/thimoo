import React, { Component } from 'react';
import { OverPack as ScrollOverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import MtSvgLines from 'react-mt-svg-lines';
import Politiquedeconfidentialite from '../politiquedeconfidentialite/politiquedeconfidentialite.js';
// import Modal from 'react-awesome-modal';

import nico from '../assets/employees/thimoo-nico-frei.jpg';
// import joel from '../assets/employees/thimoo-joel-gugger.jpg';
import eric from '../assets/employees/thimoo-eric-monnier.jpg';
import needYou from '../assets/employees/we-need-you3.jpg';
import './Contact.css';

var employees = [
  {
    img: nico,
    name: 'Nicolas Frei',
    info1: 'Communication &',
    info2: 'Design',
    link: null,
    description: "<p>Nicolas Frei</p>",
    visibility:false
  },
  /*{
    img: joel,
    name: 'Joël Gugger',
    info1: 'Web &',
    info2: 'Développement',
    link: null
  },*/
  {
    img: eric,
    name: 'Eric Monnier',
    info1: 'Web &',
    info2: 'Développement',
    link: null,
    description: "<p>Eric Monnier</p>",
    visibility:false
  },
  {
    img: needYou,
    name: 'Vous',
    info1: 'Développeur Full Stack',
    info2: '(~50%)',
    link: 'https://medium.com/@thimoo.ch/d%C3%A9veloppeur-euse-fullstack-50-59136596413f'
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
              <div className="Contact-Info__Tel"><a href="tel:+41327512269">+41&nbsp;32&nbsp;751&nbsp;22&nbsp;69</a></div>
              <div className="Contact-Info__Email"><a href="mailto:info@thimoo.ch">info<span>@</span>thimoo.ch</a></div>
              <div className="Contact-Info__Address">
                <p>thimoo<br/>
                Sur le Souhait 17<br/>
                2515 Prêles</p>
              </div>
              <div className="Contact-Info__Map">
                <a target="_blanck"
                  href="https://www.google.ch/maps/place/thimoo/@47.0945314,7.1258794,17z/data=!3m1!4b1!4m5!3m4!1s0x478e0ec7a5bc22bb:0x1a91cecc8c2535a!8m2!3d47.0945278!4d7.1280681">
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
            <div className={"footer-Bottom__Politiquedeconfidentialite" + (this.props.isPolitiquedeconfidentialiteActive ? " active" : "")} onClick={this.props.togglePolitiquedeconfidentialite}>
              <a href="#" alt="Politique de confidentialité">
                Politique de confidentialité
              </a>
            </div>
            <Politiquedeconfidentialite isOpen={this.props.isPolitiquedeconfidentialiteActive} togglePolitiquedeconfidentialite={this.props.togglePolitiquedeconfidentialite}></Politiquedeconfidentialite>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
