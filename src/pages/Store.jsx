// src/pages/Store.jsx

import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const prodottiInEvidenza = products.filter((p) => p.evidenza);

  return (
    <div className="store-page">
      <section className="hero" id="store-hero">
        <h1>
          <i className="fas fa-shopping-cart" /> Prodotti
        </h1>
        <p>
          Qui puoi vedere tutti i nostri prodotti, scegliere quello che ti piace
          e venire in negozio a comprarlo
        </p>
      </section>

      {/* Prodotti in Evidenza */}
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
                <p className="evidenza-price">€{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorie Prodotti */}
      <main className="light-container store-container">
        {categories.map((category) => (
          <section key={category} className="store-category">
            <h2 className="category-title">{category}</h2>
            <div className="store-grid">
              {products
                .filter((p) => p.category === category)
                .map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onClick={() => setSelectedProduct(prod)}
                  />
                ))}
            </div>
          </section>
        ))}
      </main>

      {/* Modale Prodotto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
