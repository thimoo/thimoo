import React, { Component } from 'react';
import map from '../assets/map.svg';
import './Contact.css';

const employees = [
  {
    img: 'hello.jpg',
    name: 'Nicolas Frei',
    role: 'Developpeur',
  },
  {
    img: 'hello2.jpg',
    name: 'Joel Gugger',
    role: 'Developpeur',
  },
  {
    img: 'hell3.jpg',
    name: 'Vous',
    role: 'Offre d\'emploi',
  }
];

const listEmployees = employees.map((employee) => {
  return (<div className="Contact-Team__Member" key={employee.img}>
    <div className="Contact-Team__Img"></div>
    <div className="Contact-Team__Description">
      {employee.name}
    </div>
  </div>);
});

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <div className="Contact-Content">
          <div className="Contact-Title">une petite <span>agence</span>,<br/>de grandes <span>aspirations</span> !</div>
          <div className="Contact-Team">
            {listEmployees}
          </div>
          <div className="Contact-Info">
            <div className="Contact-Info__Tel"><a href="tel:0041797255989">+41 79 725 59 89</a></div>
            <div className="Contact-Info__Email"><a href="mailto:info@thimoo.ch">info@thimoo.ch</a></div>
            <div className="Contact-Info__Address">
              <p>thimoo<br/>
              Closel-Bourbon 3<br/>
              2075 Thielle-Wavre</p>
            </div>
            <div className="Contact-Info__Map">
              <a href="#"><img src={map} alt="Map" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
