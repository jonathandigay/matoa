import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useRouter } from "next/router";
import {
  doc,
  addDoc,
  collection,
  setDoc,
  query,
  where,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useAuthContext } from "./Authcontext";
import { useLoader } from "./PreloaderConext";
const ShoppingContext = createContext({});

export const UseShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingProvider = ({ children }: any) => {
  const [isCart, setIsCart] = useState("");
  const [isBuyItem, setIsBuyItem] = useState("");
  const { currentUser }: any = useAuthContext();
  const Router = useRouter();
  const { setIsLoader }: any = useLoader();

  // check the user cart starts
  useEffect(() => {
    const user = currentUser;
    if (!user) return;
    const cart = async () => {
      try {
        const documents: any = [];
        const querySnapshot = await getDocs(
          collection(db, "cart", user && user.email, "items")
        );
        querySnapshot.forEach((doc) => {
          const document: any = {
            id: doc.id,
            data: doc.data(),
          };
          documents.push(document);
        });
        setIsCart(documents);
      } catch (e) {
        console.log(e);
      }
    };
    cart();
  }, [currentUser]);
  // check the user cart ends

  // Add to cart starts
  const addToCart = async ({ price, name, user, img, email }: any) => {
    const data: any = new Date().toLocaleDateString();
    const time: any = new Date().toLocaleTimeString();
    setIsLoader(true);
    try {
      const docref: any = collection(doc(db, "cart", email), "items");
      await addDoc(docref, {
        price,
        name,
        orderdate: `${data} ${time}`,
        user,
        email,
        img,
      });
      Router.push(`/cart/user?id=${email}`);
      setIsLoader(false);
    } catch (e) {
      console.log(e);
      setIsLoader(false);
    }
  };
  // Add to cart ends

  // Place order starts
  const PlaceOrder = async ({
    price,
    name,
    user,
    img,
    email,
    quantity,
    totalprice,
    paymethod,
  }: any) => {
    const data: any = new Date().toLocaleDateString();
    const time: any = new Date().toLocaleTimeString();
    setIsLoader(true);
    try {
      const docref: any = collection(doc(db, "order", email), "items");
      await addDoc(docref, {
        price,
        name,
        quantity,
        totalprice,
        paymethod,
        orderdate: `${data} ${time}`,
        status: "toreceive",
        user,
        email,
        img,
      });
      setIsBuyItem("");
      Router.push(`//user/account/mypurchases/purchases`);
      setIsLoader(false);
    } catch (e) {
      console.log(e);
      setIsBuyItem("");

      setIsLoader(false);
    }
  };
  // place order ends

  // delete to cart starts

  const RemoveToCart = async ({ id, email }: any) => {
    {
      try {
        const docref: any = doc(db, "cart", email, "items", id);
        await deleteDoc(docref);
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // delete to cart ends

  const values = {
    addToCart,
    isCart,
    setIsCart,
    RemoveToCart,
    isBuyItem,
    setIsBuyItem,
    PlaceOrder,
  };
  return (
    <ShoppingContext.Provider value={values}>
      {children}
    </ShoppingContext.Provider>
  );
};
