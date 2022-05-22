import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import motoa from "../assets/motoa.png";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useAuthContext } from "../Context/Authcontext";
const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState();
  const { currentUser }: any = useAuthContext();
  const Router = useRouter();
  const activNav = Router.query.product;
  const inputRef = useRef<any>();
  const searchOn = () => {
    setIsSearching(!isSearching);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1000);
  };

  const handleSearchChange = (e: any) => {
    setSearchInput(e);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    Router.push(`/store/search?q=${searchInput}`);
  };

  return (
    <header>
      {/* logo start */}
      <Link href="/" passHref>
        <div className="logo">
          <div className="img">
            <Image src={motoa} alt="motoa logo" />
          </div>
        </div>
      </Link>
      {/* logo ends */}
      <div className={`search-form ${isSearching && "search-form-on"}`}>
        <div className="back" onClick={searchOn}>
          <span className="material-icons">arrow_back</span>
        </div>
        <div className="field">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search Matoa..."
              ref={inputRef}
              onChange={(e) => {
                handleSearchChange(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      {/* navigations starts */}
      <div className="navigations-wrapper">
        <div className="navigations">
          <Link href="/product/watches" passHref>
            <div
              className={`navigation  ${activNav === "watches" && "active"}`}
            >
              Watches
            </div>
          </Link>
          <Link href="/product/eyeglasses" passHref>
            <div
              className={`navigation  ${activNav === "eyeglasses" && "active"}`}
            >
              Eyeglasses
            </div>
          </Link>
          <Link href="/product/bracelets" passHref>
            <div
              className={`navigation  ${activNav === "bracelets" && "active"}`}
            >
              bracelets
            </div>
          </Link>
        </div>
      </div>
      {/* navigatios ends */}

      {/* user  starts*/}
      <div className="user">
        {!isSearching && (
          <div className="search">
            <button onClick={searchOn}>
              <div className="material-icons">search</div>
            </button>
          </div>
        )}

        <div className="authentication">
          <Link href="/user/account/myaccount/profile" passHref>
            <button>
              <div className="material-icons">account_circle</div>{" "}
            </button>
          </Link>
        </div>
        <div className="cart">
          <Link
            href={`/cart/user?id=${currentUser ? currentUser.email : null}`}
            passHref
          >
            <button>
              <div className="material-icons">local_mall</div>
            </button>
          </Link>
        </div>
      </div>
      {/* user  ends*/}
    </header>
  );
};

export default Header;
