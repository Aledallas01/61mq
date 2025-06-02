// src/components/ProductsCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import products from "../data/products.json";

const ProductsCarousel = () => {
  return (
    <section className="px-6 py-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Alcuni dei nostri prodotti
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
        loop
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group perspective">
              <div className="relative w-full h-64 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={`/assets/products/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900 rounded-xl p-4 flex flex-col justify-center items-center shadow-lg">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-400 text-center">
                    {product.description}
                  </p>
                  <span className="mt-2 text-green-400 font-bold">
                    {product.price.toFixed(2)} €
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsCarousel;
