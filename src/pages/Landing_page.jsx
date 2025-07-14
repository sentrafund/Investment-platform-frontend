import React from "react";

import Header from "../components/Header";
import CompleteTradingSolutions from "../components/TradingSolutions";
import InvestmentPlans from "../components/InvestmentPlans";
import ChooseSentrafunds from "../components/ChooseSentrafunds";
import Carousel from "../components/Courasel";
import Howitworks from "../components/Howitworks";
import Faqs from "../components/Faq";
import Footer from "../components/Footer";

function Landing_page() {
  return (
    <div>
      <Header />
      <CompleteTradingSolutions />
      <InvestmentPlans />
      <ChooseSentrafunds />
      <Carousel />
      <Howitworks />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Landing_page;
