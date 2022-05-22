import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../Data";
import line from "../../assets/line.png";
import { Autoplay, Pagination } from "swiper";
import { v4 as uuidv4 } from "uuid";
const Testimoial = () => {
  return (
    <div className="testimonials-main">
      <div className="testimonials">
        <div className="title">
          <div className="line"></div>
          <h1>Testimonials</h1>
        </div>
        <div className="carousel">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
          >
            {testimonials &&
              testimonials.map((testimonial: any, i: number) => {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <div className="testimonial-content">
                      <div className="testimonial-img">
                        <div className="zigzag">
                          <Image src={line} alt="line" />
                          <Image src={line} alt="line" />
                          <Image src={line} alt="line" />
                        </div>
                        <div className="img">
                          <Image src={testimonial.img} alt={testimonial.name} />
                        </div>
                      </div>
                      <div className="testimonal-text">
                        <div className="comment">
                          <p>{testimonial.comment}</p>
                        </div>
                        <div className="name">
                          <h3>{testimonial.name}</h3>
                        </div>
                        <div className="position">
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimoial;
