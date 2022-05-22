import React from "react";
import Image from "next/image";

const Toreceive = ({ orders }: any) => {
  console.log(orders);
  return (
    <div className="toreceive">
      {!orders.length && (
        <div className="empty">
          <h1>Nothing to receive</h1>
        </div>
      )}
      {orders &&
        orders.map((order: any, i: any) => {
          return (
            <div className="toreceive-item" key={i}>
              <div className="item">
                <div className="count">
                  <h1>0{i + 1}</h1>
                </div>

                <div className="item-img">
                  <Image src={order.data.img} alt={order.data.name} />
                </div>
                <div className="item-info">
                  <div className="name">
                    <h1>{order.data.name}</h1>
                  </div>
                  <div className="price">
                    <p>P {order.data.price}</p>{" "}
                    <span>X{order.data.quantity}</span>
                  </div>

                  <div className="totalprice">
                    <p>TOTAL:</p>
                    <div>{order.data.totalprice}</div>
                  </div>
                </div>
              </div>

              <div className="info">
                <div className="shipping">
                  <h3>2 - 3 Days shipping </h3>
                </div>
                <div className="paymentmethdod">
                  <h3>{order.data.paymethod}</h3>
                </div>
                <div className="contact">
                  <h3> {`${order.data.user.phone}`}</h3>
                </div>
                <div className="address">
                  <h3>
                    {`${order.data.user.barangay},${order.data.user.city},,${order.data.user.postal}, ${order.data.user.country}`}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Toreceive;
