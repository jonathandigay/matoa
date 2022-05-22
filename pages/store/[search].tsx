import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const Router = useRouter();
  console.log(Router);
  return (
    <div className="search-main">
      <div className="search">
        <div className="title">
          <div className="line"></div>
          <h1>
            Results of <span>{Router.query.q}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Search;
