import React, { Component } from 'react';

import Project from '../project/Project';
import azan from '../assets/projects/azan-bg.jpg';
// import beesmart from '../assets/projects/Bee_Smart.jpg';
import closelBourbon from '../assets/projects/closel-bourbon.jpg';
// import echallens from '../assets/projects/echallens.jpg';
// import iqri from '../assets/projects/IQRI.jpg';
import kf from '../assets/projects/Kingdom_Festival.jpg';
import portionMagique from '../assets/projects/La_Portion_magique.jpg';
import meteosuisse from '../assets/projects/meteosuisse.jpg';
import pery from '../assets/projects/pery_la_heutte.jpg';
import rdvTheApp from '../assets/projects/RDV_the-_app.jpg';
import res from '../assets/projects/res.jpg';


import logoazan from '../assets/projects/logo/azan.svg';
// import logobeeSmart from '../assets/projects/logo/Bee_Smart_Logo.svg';
import logoCloselBourbon from '../assets/projects/logo/closel-bourbon.svg';
// import logoEchallens from '../assets/projects/logo/echallens.svg';
// import logoIQRI from '../assets/projects/logo/IQRI_Logo.svg';
import logokf from '../assets/projects/logo/Kingdom_Festival_Logo.svg';
import logoportionMagique from '../assets/projects/logo/La_Portion_Magique_Logo.svg';
import logoMeteosuisse from '../assets/projects/logo/meteosuisse.svg';
import logopery from '../assets/projects/logo/Perry_La_Heutte_Logo.svg';
import logordvTheApp from '../assets/projects/logo/RDV_The_App_Logo.svg';
import logoRes from '../assets/projects/logo/res.svg';



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
            classes="Perylaheutte"
            imgSrc={pery}
            logoSrc={logopery}
            title="Commune de Péry-La Heutte"
            text="Refonte du site web de la commune de Péry - La Heutte."
            buttonText="Découvrir le projet"
            buttonSrc="https://pery-laheutte.ch/" />
          <Project
            classes="KingdomFestival"
            imgSrc={kf}
            logoSrc={logokf}
            title="Kingdom Festival"
            text="Elaboration d’une stratégie de communication, conception d’un logo et de l'univers visuel, développement du site web et création du flyer pour le Kingdom Festival 2019."
            buttonText="Découvrir le projet"
            buttonSrc="https://kingdomfestival.ch/" />
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
            classes="LaPortionMagique"
            imgSrc={portionMagique}
            logoSrc={logoportionMagique}
            title="La Portion Magique"
            text="Conception d’un logo, création de l’univers visuel et élaboration de divers imprimés."
            buttonText="Découvrir le projet"
            buttonSrc="http://www.portion-magique.ch/" />
          <Project
            classes="RDVTheApp"
            imgSrc={rdvTheApp}
            logoSrc={logordvTheApp}
            title="Rdv The App"
            text="Application mobile RDV The App : Développement d’une application mobile pour accompagner la lecture du guide RDV The Book, à l’aide de vidéos, d’audios, de témoignages, d’images et de beaucoup d’autres contenus."
            buttonText="Découvrir le projet"
            buttonSrc="https://medium.com/@thimoo.ch/jardin-closel-bourbon-42d852c6cae5" />
          <Project
            classes="Azan"
            imgSrc={azan}
            logoSrc={logoazan}
            title="Cabinet Azan"
            text="Création d'une marque pour un cabinet infirmier. Recherche du nom, conception d'un logo et d’un univers visuel adapté. Réalisation d’une plaquette de présentation et de leur carte de visite. Mise en place d'un site de présentation."
            buttonText="Découvrir le projet"
            buttonSrc="https://cabinet-azan.ch/" />
        </div>
      </section>
    );
  }
}

export default Portfolio;
