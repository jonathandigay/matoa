import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthContext } from "../../Context/Authcontext";
import Link from "next/link";
import { UseShoppingContext } from "../../Context/ShoppingContext";
import { UseShopping } from "../actions/ShoppingActions";
const BuyModal = ({ setBuyItem }: any) => {
  const [quantity, setQuantity] = useState(1);
  const { currentUser }: any = useAuthContext();
  const { isBuyItem }: any = UseShoppingContext();
  const { onPlaceOrder }: any = UseShopping();
  const buyItem = isBuyItem;

  return (
    <div className="buymodal-main">
      <div className="overlay" onClick={() => setBuyItem("")}>
        <div>
          <h1>C</h1>
          <h1>A</h1>
          <h1>N</h1>
          <h1>C</h1>
          <h1>E</h1>
          <h1>L</h1>
        </div>
      </div>
      <div className="buymodal">
        <div className="item">
          <div className="item-img">
            <Image src={buyItem.img} alt={buyItem.name} />
          </div>
          <div className="item-info">
            <div className="name">
              <h1>{buyItem.name}</h1>
            </div>
            <div className="price">
              <p>P {buyItem.price}</p>
            </div>
            <div className="quantity">
              <button
                onClick={() => {
                  if (quantity === 1) return null;
                  setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="delivery-address">
          <div className="line"></div>
          <div className="title">
            <span className="material-icons-outlined">local_shipping</span>{" "}
            <h4>Delivery Address</h4>
          </div>
          {currentUser && (
            <div className="info">
              <div className="contact">
                {`${currentUser.phone}`}
                <h3> </h3>
              </div>
              <div className="address">
                <h3>
                  {`${currentUser.barangay},${currentUser.city},,${currentUser.postal}, ${currentUser.country}`}
                </h3>
              </div>
            </div>
          )}

          <div className="change-address-btn">
            <Link href="/user/account/myaccount/q?nav=profile" passHref>
              <button onClick={() => setBuyItem("")}>
                <span className="material-icons">edit</span> Change address
              </button>
            </Link>
          </div>
          <div className="line"></div>

          <div className="payment">
            <div className="title">
              <h1>Payment method</h1>
            </div>
            <select>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>

          <div className="checkout">
            <div className="total">
              <h1>TOTAL</h1>
              <p>{`(${quantity} item):`}</p>
              <h1>P {` ${parseInt(buyItem.price) * quantity}   `}</h1>
            </div>
            <button
              onClick={() => {
                onPlaceOrder({
                  price: buyItem.price,
                  quantity,
                  totalprice: parseInt(buyItem.price) * quantity,
                  paymethod: "COD",
                  name: buyItem.name,
                  img: buyItem.img,
                  currentUser,
                });
              }}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
