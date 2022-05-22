import React from "react";
import emptyimg from "../../assets/emptycart.png";
import Image from "next/image";
import Link from "next/link";

const Empty = () => {
  return (
    <div className="empty_cart">
      <div className="img">
        <Image src={emptyimg} alt="emptycart" />
      </div>
      <p>Your shopping cart is empty</p>
      <div className="btn">
        <Link href="/" passHref>
          <button>Go shopping Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
