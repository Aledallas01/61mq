// src/components/ProductModal.jsx
import React from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          &times;
        </button>

        {product.image && (
          <img
            src={`/assets/products/${product.image}`}
            alt={product.name}
            className="w-full h-auto rounded mb-4"
          />
        )}

        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        {product.price && (
          <p className="mb-1">
            <strong>Prezzo:</strong> €{product.price.toFixed(2)}
          </p>
        )}
        {product.description && (
          <p className="mb-1">
            <strong>Descrizione:</strong> {product.description}
          </p>
        )}
        {product.material && (
          <p className="mb-1">
            <strong>Materiale:</strong> {product.material}
          </p>
        )}
        {product.category && (
          <p className="mb-1">
            <strong>Categoria:</strong> {product.category}
          </p>
        )}
      </div>
    </div>
  );
}
