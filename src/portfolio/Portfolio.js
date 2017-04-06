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
            classes="MeteoSuisse light"
            imgSrc={meteosuisse}
            logoSrc={logoMeteosuisse}
            title="SwissMetNet Display de MétéoSuisse"
            text="Réalisation d’une application web pour l’affichage des relevés de mesuresactuelles pour la météo et le climat de MétéoSuisse."
            buttonText="Découvrir le projet"
            buttonSrc="https://medium.com/@thimoo.ch/swissmetnet-display-de-m%C3%A9t%C3%A9osuisse-f0c3bef06108" />
          <Project
            classes="CloselBourbon"
            imgSrc={closelBourbon}
            logoSrc={logoCloselBourbon}
            title="Jardin Closel Bourbon"
            text="# descriptif du projet..."
            buttonText="Découvrir le projet"
            buttonSrc="#" />
          <Project
            classes="Echallens"
            imgSrc={echallens}
            logoSrc={logoEchallens}
            title="E3 Echallens"
            text="Un redesign de l’identité graphique de l’Eglise évanglique d’Echallens dans un style actuel et coloré accompagné d’une refonte de sa présence en ligne."
            buttonText="Découvrir le projet"
            buttonSrc="#" />
        </div>
      </section>
    );
  }
}

export default Portfolio;
