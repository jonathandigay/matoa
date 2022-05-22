import Image from "next/image";
import React from "react";
import rescentnews from "../../assets/recentnews.png";
import line from "../../assets/line.png";
import Link from "next/link";
const News = () => {
  return (
    <div className="news-main">
      <div className="news">
        <div className="title">
          <div className="line"></div>
          <h2>Recent news</h2>
        </div>

        <div className="news-contents">
          <div className="text-content">
            <p>Where To Travel</p>
            <h1>Matoa Where To </h1>
            <h1>Travel? Yogyakarta</h1>
            <button>
              <Link href="/">Discover</Link>
            </button>
          </div>
          <div className="img-content">
            <div className="zigzag">
              <Image src={line} alt="line" />
              <Image src={line} alt="line" />
              <Image src={line} alt="line" />
            </div>
            <div className="img">
              <Image src={rescentnews} alt="recentnews" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
