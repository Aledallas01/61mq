import React from "react";
import products from "../data/products.json";

export default function Evidenza() {
  const prodottiInEvidenza = products.filter((p) => p.evidenza === true);
  return (
    <section id="evidenza" className="evidenza-section">
      <h2 className="fas fa-fire">Prodotti in Evidenza</h2>
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
  );
}
