import React from "react";
import { monthlydeals } from "../../Data";
import Image from "next/image";
import { UseShopping } from "../actions/ShoppingActions";
const Watches = ({ currentUser }: any) => {
  const { onBuy, AddToCart }: any = UseShopping();
  return (
    <div className="items">
      {monthlydeals &&
        monthlydeals.map((data: any, i: number) => {
          return (
            <div className="item" key={i}>
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
                <p>{data.recentPrice}</p>
              </div>
              <div className="price">
                <h3>{data.price}</h3>
              </div>
              <div className="actions">
                <button
                  onClick={() =>
                    AddToCart({
                      img: data.img,
                      name: data.name,
                      price: data.price,
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
                  Buy now
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Watches;
