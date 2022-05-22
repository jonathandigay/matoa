import React from "react";
import { useRouter } from "next/router";

import Watches from "../../components/product/Watches";
import Bracelets from "../../components/product/Bracelets";
import Eyeglasses from "../../components/product/Eyeglasses";
import { useAuthContext } from "../../Context/Authcontext";
const Product = () => {
  const Router = useRouter();
  const Product = Router.query.product;
  const { currentUser }: any = useAuthContext();

  return (
    <div className="product-main">
      <div className="product">
        <div className="title">
          <div className="line"></div>
          <h1>{Product}</h1>
        </div>

        {Product === "watches" && <Watches currentUser={currentUser} />}
        {Product === "bracelets" && <Bracelets currentUser={currentUser} />}
        {Product === "eyeglasses" && <Eyeglasses currentUser={currentUser} />}
      </div>
    </div>
  );
};

export default Product;
