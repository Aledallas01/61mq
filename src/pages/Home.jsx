// src/pages/Home.jsx

import React from "react";
import products from "../data/products.json";
import ReviewsSection from '../components/ReviewsSection';

export default function Home() {
  const prodottiInEvidenza = products.filter((p) => p.evidenza === true);
  const NovitàInNegozio = products.filter((p) => p.new === true);

  return (
    <main>
      {/* Hero */}
      <section id="home" className="hero">
        <h1>61 MetriQuadri</h1>
        <p>
          61MetriQuadri è una boutique ottica indipendente situata nel cuore
          di Vimercate, fondata da Stefano Pomposo. <br />
          Specializzata in occhiali artigianali made in Italy, propone
          collezioni esclusive come Schighera, Olimpia e Realty, realizzate
          con materiali innovativi e sostenibili come il bioacetato. <br />
          Il negozio si distingue per il design ricercato e l'attenzione alla
          qualità, offrendo sia occhiali da vista che da sole.
        </p>
      </section>

      {/* Novità in Negozio */}
      <section id="novità" className="novità-section">
        <h2>Novità in Negozio</h2>
        <div className="novità-grid">
          {NovitàInNegozio.map((product) => (
            <div key={product.id} className="novità-card">
              <img
                src={`/assets/products/${product.image}`}
                alt={product.name}
                className="novità-img"
              />
              <div className="novità-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="novità-price">€{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prodotti in Evidenza */}
      <section id="evidenza" className="evidenza-section">
        <h2>Prodotti in Evidenza</h2>
        <div className="evidenza-grid">
          {prodottiInEvidenza.map((product) => (
            <div key={product.id} className="evidenza-card">
              <img
                src={`/assets/products/${product.image}`}
                alt={product.name}
                className="evidenza-img"
              />
              <div className="evidenza-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="evidenza-price">€{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
