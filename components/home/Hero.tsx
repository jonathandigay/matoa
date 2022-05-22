import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Heroitems } from "../../Data";
import { v4 as uuidv4 } from "uuid";
import line from "../../assets/line.png";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { UseShopping } from "../actions/ShoppingActions";
const Hero = ({ currentUser }: any) => {
  const { AddToCart, onBuy }: any = UseShopping();
  return (
    <section className="hero-main">
      <div className="hero">
        <div className="hero-carousel">
          <div className="lines-top">
            <div className="line">
              <Image src={line} alt="line" />
            </div>
            <div className="line">
              <Image src={line} alt="line" />
            </div>
            <div className="line">
              <Image src={line} alt="line" />
            </div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
          >
            {Heroitems &&
              Heroitems.map((item: any) => {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <div className="slide">
                      <div className="bg"></div>

                      <div className="slide-img">
                        <div className="img">
                          <Image src={item.img} alt="watch" />
                        </div>
                      </div>
                      <div className="slide-content">
                        <div className="title">
                          <h1>{item.nameTop}</h1>
                          <h1> {item.nameBottom} </h1>
                        </div>
                        <div className="description">
                          <p>{item.description}</p>
                        </div>
                        <div className="price">
                          <p>P{item.price}</p>
                        </div>
                        <div className="btn-actions">
                          <button
                            onClick={() =>
                              AddToCart({
                                price: item.price,
                                name: `${item.nameTop} ${item.nameBottom}`,
                                img: item.img,
                                currentUser,
                              })
                            }
                          >
                            <span className="material-icons">
                              shopping_cart
                            </span>
                            Add to Cart
                          </button>
                          <button
                            onClick={() =>
                              onBuy({
                                price: item.price,
                                name: `${item.nameTop} ${item.nameBottom}`,
                                img: item.img,
                              })
                            }
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
