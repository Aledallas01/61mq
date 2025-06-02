// src/components/ProductsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import products from '../data/products.json';

export default function ProductsCarousel() {
  return (
    <section className="py-10 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Alcuni dei nostri prodotti</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={5}
        loop
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group w-full h-64 perspective">
              <div className="w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Lato Front */}
                <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={`/assets/products/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Lato Back */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-gray-700 rounded-lg flex flex-col items-center justify-center p-4 text-center shadow-md">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-300">{product.description}</p>
                  <span className="mt-2 text-green-400 font-bold">{product.price.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
