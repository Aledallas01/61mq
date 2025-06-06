// src/components/ProductCard.jsx
import React, { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="product-card cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div
          className="product-image"
          style={{
            backgroundImage: `url(/assets/products/${product.image})`,
          }}
        />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">€{product.price.toFixed(2)}</p>
        </div>
      </div>

      {open && (
        <ProductModal product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
