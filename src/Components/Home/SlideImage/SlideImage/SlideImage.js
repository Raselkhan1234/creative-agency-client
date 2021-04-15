import React from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./SlideImage.css";
import CarouselImage from "../CarouselImage/CarouselImage";


SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, A11y]);

const carouselImage = [
  {
    id: "1",
    image: "https://i.ibb.co/zJjV40M/carousel-1.png",
  },
  {
    id: "2",
    image: "https://i.ibb.co/S0JF1Nh/carousel-2.png",
  },
  {
    id: "3",
    image: "https://i.ibb.co/stzr1W7/carousel-3.png",
  },
];

const SlideImage = () => {
  return (
    <section
      className="slideImage-container  justify-content-center "
      style={{ padding: "50px" }}
    >
      <h4
        class="d-flex justify-content-center "
        className="slideImage-h4"
      >
        Here are some of
        <span style={{ color: "#7AB259", marginLeft: "5px" }}> our works</span>
      </h4>
      <div class="d-flex flex-row justify-content-center">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={true}
          loop={true}
          pagination
          onSwiper={(swiper) => console.log(swiper)}
        >
          {carouselImage.map((Im) => (
            <SwiperSlide>
              <CarouselImage Im={Im} key={Im.id}></CarouselImage>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SlideImage;
