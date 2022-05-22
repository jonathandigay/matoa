import React from "react";
import { useLoader } from "../Context/PreloaderConext";
const Preloader = () => {
  const { isLoader } = useLoader();

  return (
    <div
      className={`preloader ${isLoader && "preloader-show"} ${
        !isLoader && "preloader-hide"
      }`}
    >
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
  
    </div>
  );
};

export default Preloader;
