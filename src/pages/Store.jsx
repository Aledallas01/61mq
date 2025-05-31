// src/pages/Store.jsx
import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Store() {
  // estrai categorie uniche
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="store-page">
      
    <section className="hero" id="store-hero">
      <h1>
        <i className="fas fa-shopping-cart" /> Prodotti
      </h1>
      <p>Qui puoi vedere tutti i nostri prodotti, scegliere quello che ti piace e venire in negozio a comprarlo</p>
    </section>

      <main className="store-container">
        {categories.map(category => (
          <section key={category} className="store-category">
            <h2 className="category-title">{category}</h2>
            <div className="store-grid">
              {products
                .filter(p => p.category === category)
                .map(prod => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
