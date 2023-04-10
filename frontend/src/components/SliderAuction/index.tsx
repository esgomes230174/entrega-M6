import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/modules/free-mode/free-mode.min.css";

import { CardAuction } from "../ProductAuction";
import { Container } from "../Slider/styles";

const SliderAuction = () => {
  return (
    <Container>
      <h3 id="Leilão" style={{ paddingLeft: "1rem" }}>
        Leilão
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 500,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 130,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 300,
            },
          }}
        >
          <SwiperSlide>
            <CardAuction />
          </SwiperSlide>
          <SwiperSlide>
            <CardAuction />
          </SwiperSlide>
          <SwiperSlide>
            <CardAuction />
          </SwiperSlide>
          <SwiperSlide>
            <CardAuction />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default SliderAuction;
