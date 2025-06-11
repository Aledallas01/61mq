// src/components/Evidenza.jsx
import React, { useState } from "react";
import products from "../data/products.json";
import ProductModal from "./ProductModal";

export default function Evidenza() {
  const prodottiInEvidenza = products.filter((p) => p.evidenza === true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="evidenza" className="light-container evidenza-section">
      <h2>Prodotti in Evidenza</h2>
      <div className="evidenza-grid">
        {prodottiInEvidenza.map((product) => (
          <div
            key={product.id}
            className="evidenza-card cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={`/assets/products/${product.image}`}
              alt={product.name}
              className="evidenza-img"
            />
            <div className="evidenza-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="evidenza-price">€{product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
