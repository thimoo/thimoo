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
            <li><Link className="Menu__Link" onClick={this.closeMenu.bind(this)} to="Portfolio" duration={800}>portfolio</Link></li>
            <li><Link className="Menu__Link" onClick={this.closeMenu.bind(this)} to="Contact" duration={900}>l'équipe</Link></li>
            <li className="Menu__Contact">
              <div className="Menu__Address">
                <p>thimoo<br/>
                Closel Bourbon 3<br/>
                2075 Thielle-Wavre</p>
              </div>
              <div className="Menu__Tel"><a href="tel:0041797255989">+41&nbsp;79&nbsp;725&nbsp;59&nbsp;89</a></div>
              <div className="Menu__Email"><a href="mailto:info@thimoo.ch">info<span>@</span>thimoo.ch</a></div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Menu;
