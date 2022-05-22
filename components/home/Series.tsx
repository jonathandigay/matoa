import Image from "next/image";
import React from "react";
import { Series } from "../../Data";
const SeriesItems = () => {
  return (
    <div className="series-main">
      <div className="series-wrap">
        <div className="series">
          {Series.map((eachseries: any, i) => {
            return (
              <div className="eachseries" key={i}>
                <div className="title">
                  <h1>{eachseries.title}</h1>
                </div>
                {eachseries.contents.map((content: any, i: number) => {
                  return (
                    <div className="item" key={i}>
                      <div className="img">
                        <Image src={content.img} alt="series" />
                      </div>
                      <div className="item-content">
                        <div className="name">
                          <h2>{content.name}</h2>
                        </div>
                        <div className="price">
                          <h1>{content.price}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-more">
        <div className="line"></div>
        <button>Show more</button>
      </div>
    </div>
  );
};

export default SeriesItems;
