import React from "react";
import products from "../data/products.json";

export default function Novita() {
  const NovitàInNegozio = products.filter((p) => p.new === true);

  return (
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
  );
}
