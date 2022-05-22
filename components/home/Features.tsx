import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
const Features = () => {
  return (
    <div className="features-main">
      <div className="features">
        {/* featur one starts */}
        <div className="feature">
          <div className="content">
            <h3>
              Luxurious <b>Eyewear</b>
            </h3>

            <p>See the beauty of exotic world with the luxurious glasses</p>

            <Link href="/">Discover now</Link>
          </div>

          <div className="img">
            <Image src={feature1} alt="feature1" />
          </div>
        </div>
        {/* featur one ends */}
        {/* featur two starts */}
        <div className="feature">
          <div className="content">
            <h3>
              Comfortable <b>Watches</b>
            </h3>

            <p>Feels the balancing function and beauty in our wooden watches</p>

            <Link href="/">Discover now</Link>
          </div>

          <div className="img">
            <Image src={feature2} alt="feature12" />
          </div>
        </div>
        {/* featur two ends */}
      </div>
    </div>
  );
};

export default Features;
