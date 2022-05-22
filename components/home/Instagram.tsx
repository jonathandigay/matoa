import Image from "next/image";
import React from "react";
import { instagrams } from "../../Data";
import { v4 as uuidv4 } from "uuid";
const Instagram = () => {
  return (
    <div className="instagram-main">
      <div className="instagram">
        <div className="title">
          <h1>Instagram</h1>
        </div>
        <div className="instagram-images">
          {instagrams &&
            instagrams.map((instagram: any, i: number) => {
              return (
                <div className="img" key={uuidv4()}>
                  <Image src={instagram.img} alt="instagram" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
