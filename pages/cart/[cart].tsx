import Image from "next/image";
import React from "react";
import { useAuthContext } from "../../Context/Authcontext";
import { Private } from "../../Routes/privateroute";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import EmptyCart from "../../components/Cart/Empty";
import { UseShopping } from "../../components/actions/ShoppingActions";
const Cart = (props: any) => {
  const { currentUser }: any = useAuthContext();
  const { onBuy, RemoveToCart }: any = UseShopping();
  return (
    <Private auth={currentUser}>
      <div className="cart_main">
        <div className="cart">
          {!props.data.length && <EmptyCart />}
          {props &&
            props.data.map((prop: any, i: any) => {
              return (
                <div className="item" key={i}>
                  <div className="count">
                    <h1>0{i + 1}</h1>
                  </div>
                  <div
                    className="cancel"
                    onClick={() => {
                      alert("are you sure to remove it ");
                      RemoveToCart({ id: prop.id, email: prop.data.email });
                    }}
                  >
                    <span className="material-icons">close</span>
                  </div>
                  <div className="item-img">
                    <Image src={prop.data.img} alt={prop.data.name} />
                  </div>
                  <div className="item-info">
                    <div className="name">
                      <h1>{prop.data.name}</h1>
                    </div>
                    <div className="price">
                      <p>P {prop.data.price}</p>
                    </div>
                    <div className="actions">
                      <button
                        onClick={() => {
                          onBuy({
                            img: prop.data.img,
                            name: prop.data.name,
                            price: prop.data.price,
                            currentUser
                          });
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Private>
  );
};

export async function getServerSideProps(context: any) {
  const documents: any = [];
  const query = context.query.id;

  try {
    const querySnapshot = await getDocs(collection(db, "cart", query, "items"));
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        data: doc.data(),
      };
      documents.push(data);
    });
  } catch (e) {
    console.log(e);
  }
  return {
    props: { data: documents },
  };
}

export default Cart;
