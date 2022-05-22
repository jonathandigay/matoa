import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/virtual";
import "react-toastify/dist/ReactToastify.css";
import "material-icons/iconfont/material-icons.scss";
import { Layout } from "../components/layout/Layout";
import { AuthProvider } from "../Context/Authcontext";
import { LoaderProvider } from "../Context/PreloaderConext";
import Preloader from "../components/Preloader";

import Head from "../components/head";
import { ShoppingProvider } from "../Context/ShoppingContext";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <LoaderProvider>
        <AuthProvider>
          <ShoppingProvider>
            <Preloader />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ShoppingProvider>
        </AuthProvider>
      </LoaderProvider>
    </>
  );
}

export default MyApp;
