// src/pages/Home.jsx

import React from "react";
import products from "../data/products.json";

import Servizi from "../components/Servizi.jsx";
import ProdottiInEvidenza from "../components/Evidenza.jsx";
import NovitàInNegozio from "../components/Novita.jsx";
import DoveTrovarci from "../components/DoveTrovarci.jsx";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="home" className="hero">
        <h1>61 MetriQuadri</h1>
        <p>
          61MetriQuadri è una boutique ottica indipendente situata nel cuore di
          Vimercate, fondata da Stefano Pomposo. <br />
          Specializzata in occhiali artigianali made in Italy, propone
          collezioni esclusive come Schighera, Olimpia e Realty, realizzate con
          materiali innovativi e sostenibili come il bioacetato. <br />
          Il negozio si distingue per il design ricercato e l'attenzione alla
          qualità, offrendo sia occhiali da vista che da sole.
        </p>
      </section>

      {/* Servizi */}
      <Servizi />

      {/* Chi Siamo */}
      <section className="container" id="about-hero">
        <h1>
          <i className="fas fa-info-circle" /> Chi Siamo
        </h1>
        <p>
          61MetriQuadri nasce dalla visione di Stefano Pomposo: creare uno
          spazio dove l’occhiale non è solo uno strumento, ma un’estensione
          della personalità. <br />
          Nel cuore di Vimercate, la nostra boutique indipendente unisce
          passione per il design, artigianalità italiana e attenzione per i
          materiali sostenibili. <br />
          Ogni collezione è selezionata con cura: vogliamo offrirti montature
          uniche, fuori dagli schemi, che raccontino qualcosa di te. <br />
          Che tu stia cercando stile, comfort o innovazione, 61MetriQuadri è il
          posto giusto per trovare ciò che ti rappresenta.
        </p>
      </section>

      {/* Prodotti in Evidenza */}
      <ProdottiInEvidenza />

      {/* Novità in Negozio */}
      <NovitàInNegozio />

      {/* Dove Trovarci */}
      <DoveTrovarci />
    </main>
  );
}
