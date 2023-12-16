import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import test1 from "../../../../../public/test1.png";
import test2 from "../../../../../public/test2.png";
import test3 from "../../../../../public/test3.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VerticalSlider = () => {
  return (
    <>
      <div className="swipe">
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          direction="vertical"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          
          className="mySwiper swiper-container"
          breakpoints={{
            292: {
              direction: "horizontal",
              slidesPerView: 1,
            },
            768: {
              direction: "horizontal",
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              direction: "vertical",
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="slidercard">
              <img src={test1} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Madhav Dhungana</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shruti Khanal</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test3} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Ajita Giri</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Divesh Acharya</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test3} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Sumit Ghimire</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Sujit Nepal</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default VerticalSlider;
