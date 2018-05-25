import React, { Component } from 'react';

import Project from '../project/Project';
import meteosuisse from '../assets/projects/meteosuisse.jpg';
import closelBourbon from '../assets/projects/closel-bourbon.jpg';
import echallens from '../assets/projects/echallens.jpg';
import res from '../assets/projects/res.jpg';
import azan from '../assets/projects/azan-bg.jpg';

import logoMeteosuisse from '../assets/projects/logo/meteosuisse.svg';
import logoCloselBourbon from '../assets/projects/logo/closel-bourbon.svg';
import logoEchallens from '../assets/projects/logo/echallens.svg';
import logoRes from '../assets/projects/logo/res.svg';
import logoazan from '../assets/projects/logo/azan.svg';

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
            text="Réalisation d’une application web pour l’affichage des relevés de mesures actuelles pour la météo et le climat de MétéoSuisse."
            buttonText="Découvrir le projet"
            buttonSrc="https://medium.com/@thimoo.ch/swissmetnet-display-de-m%C3%A9t%C3%A9osuisse-f0c3bef06108" />
          <Project
            classes="ReseauEvangeliqueSuisse"
            imgSrc={res}
            logoSrc={logoRes}
            title="Réseau Évangélique Suisse"
            text="Refonte de la présence en ligne du Réseau évangélique Suisse, un mouvement qui regroupe 192 Eglises évangéliques locales et 75 organisations chrétiennes en Suisse romande."
            buttonText="Découvrir le projet"
            buttonSrc="https://evangelique.ch" />
          <Project
            classes="CloselBourbon"
            imgSrc={closelBourbon}
            logoSrc={logoCloselBourbon}
            title="Jardin Closel Bourbon"
            text="Conception d’une ligne graphique pour les produits bio élaborés par des jeunes actifs dans l’entreprise d’intégration PerspectivePlus."
            buttonText="Découvrir le projet"
            buttonSrc="https://medium.com/@thimoo.ch/jardin-closel-bourbon-42d852c6cae5" />
          <Project
            classes="Azan"
            imgSrc={azan}
            logoSrc={logoazan}
            title="Cabinet Azan"
            text="Création de la marque Azan, réalisation du logo et de l'univers visuel et carte de visite, plaquette, site vitrine,."
            buttonText="Découvrir le projet"
            buttonSrc="https://cabinet-azan.ch/" />
        </div>
      </section>
    );
  }
}

export default Portfolio;
