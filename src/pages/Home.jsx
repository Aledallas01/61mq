// src/pages/Home.jsx

import React from "react";
import products from "../data/products.json";

export default function Home() {
  // Filtra i prodotti in evidenza
  const prodottiInEvidenza = products.filter(p => p.evidenza === true);

  return (
    <>
      <main>
        {/* Hero */}
        <section id="home" className="hero py-12 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">61 MetriQuadri</h1>
          <p className="max-w-3xl mx-auto text-lg">
            61MetriQuadri è una boutique ottica indipendente situata nel cuore
            di Vimercate, fondata da Stefano Pomposo. <br />
            Specializzata in occhiali artigianali made in Italy, propone
            collezioni esclusive come Schighera, Olimpia e Realty, realizzate
            con materiali innovativi e sostenibili come il bioacetato. <br />
            Il negozio si distingue per il design ricercato e l'attenzione alla
            qualità, offrendo sia occhiali da vista che da sole.
          </p>
        </section>

        {/* Prodotti in evidenza */}
        <section id="evidenza" className="py-12 px-4">
          <h2 className="text-center text-3xl font-bold mb-8 text-primary">Prodotti in Evidenza</h2>
          <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {prodottiInEvidenza.map((product) => (
              <div key={product.id} className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`/assets/products/${product.image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-700">{product.description}</p>
                  <p className="text-lg font-bold mt-2">€{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
