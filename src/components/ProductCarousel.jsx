import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import products from "../data/products.json";


export default function ProductCarousel() {
  return (
    <section id="prodotti" className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary">
        Alcuni dei nostri prodotti
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        speed={3000} // più alto = più lento e fluido
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        grabCursor={true}
        allowTouchMove={false}
        className="w-full px-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="group perspective">
            <div className="relative w-full h-72 transition-transform duration-500 transform-style group-hover:rotate-y-180">
              {/* Fronte */}
              <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                <img
                  src={`/assets/products/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Retro */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary text-white p-4 flex flex-col justify-center items-center rounded-xl">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm mt-2">{product.description}</p>
                <p className="text-lg font-semibold mt-4">€{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
