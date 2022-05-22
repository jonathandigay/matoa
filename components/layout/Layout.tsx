import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useRouter } from "next/router";
import { useLoader } from "../../Context/PreloaderConext";
import Link from "next/link";
import { UseShoppingContext } from "../../Context/ShoppingContext";
import { useAuthContext } from "../../Context/Authcontext";
import Head from "next/head";
import BuyModal from "../Cart/BuyModal";
export const Layout = ({ children }: any) => {
  const [privacybtn, setPrivacyBtn] = useState(true);
  const { isBuyItem, setIsBuyItem }: any = UseShoppingContext();
  const { isLoader } = useLoader();
  const Router = useRouter();
  const { currentUser, setIsComplete }: any = useAuthContext();
  const [isHeader, setIsHeader] = useState(true);

  useEffect(() => {
    if (Router.asPath === "/privacyandpolicy") {
      setPrivacyBtn(false);
    }
  }, [Router.asPath]);

  useEffect(() => {
    if (currentUser) {
      if (
        currentUser.gender &&
        currentUser.phone &&
        currentUser.barangay &&
        currentUser.municipality &&
        currentUser.city &&
        currentUser.postal &&
        currentUser.country
      ) {
        setIsComplete(true);
      } else {
        setIsComplete(false);
      }
    }
  }, [currentUser]);
  useEffect(() => {
    let lastscroll = 0;
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (lastscroll < scroll) {
        setIsHeader(false);
      } else {
        setIsHeader(true);
      }

      lastscroll = scroll;
    });
  });

  return (
    <>
      <Head>
        <title>matoa | code by jonathan digay</title>
        <meta name="keywords" content="matoa "></meta>

        <link rel="icon" href="/motoa.png" />
      </Head>

      {isLoader === false && (
        <>
          <div className={`top ${isHeader ? "headerOn" : "headerOff"}`}>
            <Header />
            {/* <Categories /> */}
          </div>
          {children}
          <div
            className={`privacybtn-main ${
              !privacybtn && "privactbtn-main-close"
            }`}
          >
            <div className="privacybtn">
              <button>
                <Link href="/privacyandpolicy" passHref>
                  Privacy and Policy
                </Link>
              </button>
              <div className="hide" onClick={() => setPrivacyBtn(false)}>
                <span className="material-icons">close</span>
              </div>
            </div>
          </div>
          {isBuyItem && (
            <BuyModal setBuyItem={setIsBuyItem} buyItem={isBuyItem} />
          )}
          <Footer />
        </>
      )}
    </>
  );
};
