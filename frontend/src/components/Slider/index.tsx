import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

import { Container } from "./styles";
import { ProductCard } from "../ProductCard";
import { ISliderProps } from "../../interfaces/slider";
import { ProductCardAdmin } from "../ProductCardAdmin";

const Slider = ({ title, children }: ISliderProps) => {
  const url = window.location.href;
  const id = localStorage.getItem("@user:id");
  return (
    <Container>
      <h3 id={title} style={{ paddingLeft: "1rem" }}>
        {title}
      </h3>
      <div>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            485: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {children.map((announcement, index) => (
            <SwiperSlide key={index}>
              {url === `https://motorshopm6.vercel.app/profileAdmin/${id}` ? (
                <>
                  <ProductCardAdmin announcement={announcement} />
                </>
              ) : (
                <>
                  <ProductCard announcement={announcement} />
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
