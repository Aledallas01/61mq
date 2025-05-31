import React from "react";
import products from "../data/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <div className="product-carousel-container">
      <h2 className="section-title text-center">Alcuni dei nostri prodotti</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        className="product-swiper"
      >
        {products.slice(0, 10).map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={`/img/${product.image}`} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flip-back">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span>{product.price.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
