import React, { Component } from 'react';
import { Link } from 'rc-scroll-anim';
import './politiquedeconfidentialite.css';

class Politiquedeconfidentialite extends Component {

  closeMenu(e) {
    this.props.togglePolitiquedeconfidentialite(e);
  }

  render() {
    return (
      <section id="Politiquedeconfidentialite" className={"Politiquedeconfidentialite" + (this.props.isOpen ? " is-open" : "")}>
        <div className="Politiquedeconfidentialite-Content">
          <h2>Qui sommes-nous&nbsp;?</h2>
          <p>Nicolas Frei thimoo<br />Closel Bourbon 3<br />2075 Thielle-Wavre<br />L’adresse de notre site Web est&nbsp;: https://www.thimoo.ch.</p>
          <h2>Utilisation des données personnelles collectées</h2>
          <p>La mise à disposition de données personnelles peut être exigée par la loi ou résulter de règlementations contractuelles. Pour conclure un contrat, nous sommes par exemple obligés de recueillir et traiter des données personnelles. Dans le cas contraire, aucun contrat ne pourrait être conclu. </p>
          <h3>Cookies</h3>
          <p>Thimoo se réserve le droit de placer des cookies sur son site web. Les cookies sont de petits fichiers téléchargés sur votre ordinateur. Les cookies nous aident à assurer un fonctionnement sécurisant et fluide de notre site web (cookies de sécurité et cookies de session).</p>
          <p>En utilisant ce site web, vous acceptez notre utilisation des cookies.</p>
          <h3>Contenu embarqué depuis d’autres sites</h3>
          <p>Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.</p>
          <p>Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivi tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>
          <h3>Statistiques et mesures d’audience</h3>
          <p>Ce site Internet a recours à Google Analytics, un service d’analyse de la société Google Inc. («Google»). Ce service utilise des cookies, c’est-à-dire des fichiers textes enregistrés sur votre ordinateur, qui permettent d’analyser votre utilisation du site web. Les informations sur votre emploi du site (y compris votre adresse IP), collectées par des cookies, sont transmises à un serveur appartenant à Google aux États-Unis et y sont stockées.</p>
          <h2>Utilisation et transmission de vos données personnelles</h2>
          <p>Thimoo recueille le moins d'informations possible sur vous. Nous traitons vos données personnelles avec un soin particulier pour que votre vie privée soit protégée. Nous utilisons principalement ces données pour notre gestion de projets et notre prospection client.</p>
          <h2>Les droits que vous avez sur vos données</h2>
          <p>Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
          <h2>Transmission de vos données personnelles</h2>
          <p>Nous ne vendons, ne distribuons et ne louons en aucun cas vos données personnelles à des tiers</p>
          <h2>Informations de contact</h2>
          <p>Pour toute question relative à la politique de confidentialité de ce site, envoyez un e-mail à l'adresse info@thimoo.ch.</p>
        </div>
      </section>
    );
  }
}

export default Politiquedeconfidentialite;
