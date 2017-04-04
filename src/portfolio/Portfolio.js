import React, { Component } from 'react';
import Project from '../project/Project';
import meteosuisse from '../assets/projects/meteosuisse.jpg';
import closelBourbon from '../assets/projects/closel-bourbon.jpg';
import echallens from '../assets/projects/echallens.jpg';

import logoMeteosuisse from '../assets/projects/logo/meteosuisse.svg';
import logoCloselBourbon from '../assets/projects/logo/closel-bourbon.svg';
import logoEchallens from '../assets/projects/logo/echallens.svg';

import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <section id="Portfolio" className="Portfolio">
        <div className="Portfolio-Content">
          <Project
            imgSrc={meteosuisse}
            logoSrc={logoMeteosuisse} />
          <Project imgSrc={closelBourbon} logoSrc={logoCloselBourbon} />
          <Project
            imgSrc={echallens}
            logoSrc={logoEchallens}
            title="E3 Echallens"
            text="Un redesign de l’identité graphique de l’Eglise évanglique d’Echallens dans un style actuel et coloré accompagné d’une refonte de sa présence en ligne."
            buttonText="Découvrir le site"
            buttonSrc="#" />
        </div>
      </section>
    );
  }
}

export default Portfolio;
