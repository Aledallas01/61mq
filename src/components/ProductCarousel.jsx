import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import products from "../data/products.json";

export default function ProductCarousel() {
  return (
    <section id="prodotti" className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary">
        Alcuni dei nostri prodotti
      </h2>

      {products.map((product) => (
        <div key={product.id} className="border p-4 m-2">
          <img
            src={`/assets/products/${product.image}`}
            alt={product.name}
            className="h-32"
          />
          <p>{product.name}</p>
        </div>
      ))}
    </section>
  );
}
