import React from "react";

import Header from "../components/Header";
import CompleteTradingSolutions from "../components/TradingSolutions";
import InvestmentPlans from "../components/InvestmentPlans";
import ChooseSentrafunds from "../components/ChooseSentrafunds";
import Carousel from "../components/Courasel";
import Howitworks from "../components/Howitworks";
import Faqs from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BrandIcon from "../components/BrandIcon";
import FloatingWhatsAppButton from "../components/FloatingWhatsappButton";

function Landing_page() {
  return (
    <div>
      <Header />
      <Hero />
      <CompleteTradingSolutions />
      <InvestmentPlans />
      <ChooseSentrafunds />
      <Carousel />
      <Howitworks />
      <Faqs />
      <Footer />
      <FloatingWhatsAppButton
        phoneNumber={"16605283910"}
        message={"Hi there! I'm interested in your services."}
      />
    </div>
  );
}

export default Landing_page;
