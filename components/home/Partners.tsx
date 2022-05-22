import React from "react";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";
import partner7 from "../../assets/partner7.png";
import partner8 from "../../assets/partner8.png";
import partner9 from "../../assets/partner9.png";
import partner10 from "../../assets/partner10.png";
import Image from "next/image";
const Partners = () => {
  return (
    <div className="partners-main">
      <div className="partners">
        <div className="partners-carousel">
          {/* carousel top starts */}
          <div className="trucker-top">
            {/* slides original starts */}
            <div className="slides">
              <div className="slide">
                <Image src={partner1} alt="partner1" />
              </div>
              <div className="slide">
                <Image src={partner2} alt="partner2" />
              </div>
              <div className="slide">
                <Image src={partner3} alt="partner3" />
              </div>
              <div className="slide">
                <Image src={partner4} alt="partner4" />
              </div>
              <div className="slide">
                <Image src={partner5} alt="partner5" />
              </div>
            </div>
            {/* slides original ends */}
            {/* slides copy starts */}
            <div className="slides">
              <div className="slide">
                <Image src={partner1} alt="partner1" />
              </div>
              <div className="slide">
                <Image src={partner2} alt="partner2" />
              </div>
              <div className="slide">
                <Image src={partner3} alt="partner3" />
              </div>
              <div className="slide">
                <Image src={partner4} alt="partner4" />
              </div>
              <div className="slide">
                <Image src={partner5} alt="partner5" />
              </div>
            </div>
            {/* slides copy ends */}
          </div>

          {/* carousel top ends */}

          {/* carousel bottom starts */}
          <div className="trucker-bottom">
            {/* slides original starts */}
            <div className="slides">
              <div className="slide">
                <Image src={partner6} alt="partner6" />
              </div>
              <div className="slide">
                <Image src={partner7} alt="partner7" />
              </div>
              <div className="slide">
                <Image src={partner8} alt="partner8" />
              </div>
              <div className="slide">
                <Image src={partner9} alt="partner9" />
              </div>
              <div className="slide">
                <Image src={partner10} alt="partner10" />
              </div>
            </div>
            {/* slides original ends */}
            {/* slides copy starts */}
            <div className="slides">
              <div className="slide">
                <Image src={partner6} alt="partner6" />
              </div>
              <div className="slide">
                <Image src={partner7} alt="partner7" />
              </div>
              <div className="slide">
                <Image src={partner8} alt="partner8" />
              </div>
              <div className="slide">
                <Image src={partner9} alt="partner9" />
              </div>
              <div className="slide">
                <Image src={partner10} alt="partner10" />
              </div>
            </div>
            {/* slides copy ends */}
          </div>
          {/* carousel bottom  ends */}
        </div>
      </div>
    </div>
  );
};

export default Partners;
