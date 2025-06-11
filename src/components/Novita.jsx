// src/components/Novita.jsx
import React, { useState } from "react";
import products from "../data/products.json";
import ProductModal from "./ProductModal";

export default function Novita() {
  const novità = products.filter((p) => p.new === true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="novità" className="light-container novità-section">
      <h2>Novità in Negozio</h2>
      <div className="novità-grid">
        {novità.map((product) => (
          <div
            key={product.id}
            className="novità-card cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={`/assets/products/${product.image}`}
              alt={product.name}
              className="novità-img"
            />
            <div className="novità-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="novità-price">€{product.price.toFixed(2)}</p>
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
