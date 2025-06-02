// src/pages/Home.jsx

import React from "react";
import ProductsCarousel from "../components/ProductsCarousel";

export default function Home() {
  return (
    <>
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

        {/* Prodotti */}
        <div className="min-h-screen bg-gray-900 text-white">
          <ProductsCarousel />
        </div>
      </main>
    </>
  );
}
