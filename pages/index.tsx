import { GetServerSidePropsContext } from "next";
import React from "react";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import MonthlyDeal from "../components/home/MonthlyDeal";
import News from "../components/home/News";
import Testimonials from "../components/home/Testimonials";
import Instagram from "../components/home/Instagram";
import Series from "../components/home/Series";
import Partners from "../components/home/Partners";
import { useAuthContext } from "../Context/Authcontext";
const Home = () => {
  const { currentUser }: any = useAuthContext();
  return (
    <div>
      <Hero currentUser={currentUser} />
      <Features />
      <MonthlyDeal currentUser={currentUser} />
      <News />
      <Series />
      <Testimonials />
      <Instagram />
      <Partners />
    </div>
  );
};

export default Home;
