import React, { Component } from 'react';
import { Link } from 'rc-scroll-anim';
import './Menu.css';

class Menu extends Component {

  closeMenu(e) {
    this.props.toggleMenu(e);
  }

  render() {
    return (
      <section id="Menu" className={"Menu" + (this.props.isOpen ? " is-open" : "")}>
        <div className="Menu-Content">
          <ul className="Menu-Content__List">
            <li><Link onClick={this.closeMenu.bind(this)} to="Portfolio" duration="800">Portfolio</Link></li>
            <li><Link onClick={this.closeMenu.bind(this)} to="Portfolio" duration="800">Clients</Link></li>
            <li><Link onClick={this.closeMenu.bind(this)} to="Contact" duration="900">Contact</Link></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Menu;
