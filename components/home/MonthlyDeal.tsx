import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import line from "../../assets/line.png";
import { monthlydeals } from "../../Data";
import { UseShopping } from "../actions/ShoppingActions";

const MonthlyDeal = ({ currentUser }: any) => {
  const { AddToCart, onBuy }: any = UseShopping();

  return (
    <section className="monthlydeal-main">
      <div className="monthlydeals">
        <div className="title">
          <div className="line"></div>
          <h2>Monthly Deal</h2>
        </div>
        <div className="zigzag">
          <Image src={line} alt="line" />
          <Image src={line} alt="line" />
          <Image src={line} alt="line" />
          <Image src={line} alt="line" />
        </div>
        <div className="cards">
          {monthlydeals &&
            monthlydeals.map((data: any, i: number) => {
              return (
                <div className="card" key={uuidv4()}>
                  <div className="img">
                    <Image src={data.img} alt={data.name} />
                  </div>
                  <div className="name">
                    <h3>{data.name}</h3>
                  </div>
                  <div className="off">
                    <h5>{data.off}</h5>
                  </div>
                  <div className="recent-price">
                    <p>Php {data.recentPrice}</p>
                  </div>
                  <div className="price">
                    <h3>Php {data.price}</h3>
                  </div>
                  <div className="actions">
                    <button
                      onClick={() =>
                        AddToCart({
                          price: data.price,
                          name: `${data.name}`,
                          img: data.img,
                          currentUser,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() =>
                        onBuy({
                          img: data.img,
                          name: data.name,
                          price: data.price,
                          currentUser,
                        })
                      }
                    >
                      Buy
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MonthlyDeal;
