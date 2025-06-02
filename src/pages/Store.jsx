// src/pages/Store.jsx
import React from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Store() {
  // estrai categorie uniche
  const categories = Array.from(new Set(products.map((p) => p.category)));

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

      {/* Prodotti in evidenza */}
      <section id="evidenza" className="py-12 px-4">
        <h2 className="text-center text-3xl font-bold mb-8 text-primary">
          Prodotti in Evidenza
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {prodottiInEvidenza.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden"
            >
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

      <main className="store-container">
        {categories.map((category) => (
          <section key={category} className="store-category">
            <h2 className="category-title">{category}</h2>
            <div className="store-grid">
              {products
                .filter((p) => p.category === category)
                .map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
