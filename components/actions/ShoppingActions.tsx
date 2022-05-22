import { useRouter } from "next/router";
import { UseShoppingContext } from "../../Context/ShoppingContext";
import { useEffect } from "react";
import { useAuthContext } from "../../Context/Authcontext";
export const UseShopping = () => {
  const Router = useRouter();
  const { currentUser, setIsComplete, isComplete }: any = useAuthContext();
  const { addToCart, setIsBuyItem, RemoveToCart, PlaceOrder }: any =
    UseShoppingContext();
  const AddToCart = ({ price, name, img, currentUser }: any) => {
    if (!currentUser) {
      Router.push("/user/auth/login");
    } else {
      addToCart({
        price,
        name,
        img,
        user: currentUser,
        email: currentUser.email,
      });
    }
  };

  const onPlaceOrder = ({
    price,
    name,
    img,
    currentUser,
    quantity,
    totalprice,
    paymethod,
  }: any) => {
    if (!currentUser) {
      Router.push("/user/auth/login");
    } else {
      PlaceOrder({
        price,
        name,
        img,
        quantity,
        totalprice,
        paymethod,
        user: currentUser,
        email: currentUser.email,
      });
    }
  };

  const onBuy = ({ img, name, price }: any) => {
    if (isComplete === false) {
      Router.push("/user/account/myaccount/profile");
      return;
    }
    setIsBuyItem({
      img,
      name,
      price,
    });
  };

  return { AddToCart, onBuy, RemoveToCart, onPlaceOrder };
};
