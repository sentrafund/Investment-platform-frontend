import React from "react";
import Investmentcards from "./Investmentcards";

function Howitworks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-blue-900 text-lg sm:text-xl font-medium mb-2">
          How it works
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Investing with <span className="text-amber-500">SENTRAFUND</span>
        </h1>
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-items-center">
        <Investmentcards
          title="Sign Up"
          content="Create your account on our secure platform and gain access to our investing tools. It's easy and quick, just provide some basic information, and you'll be ready to start your investing journey."
        />
        <Investmentcards
          title="Fund Your Account"
          content="Deposit funds securely to start investing. Choose from multiple payment options and enjoy our encrypted transaction system, designed to keep your funds safe."
        />
        <Investmentcards
          title="Grow Your Investments"
          content="Track your portfolio and see your investments grow with informed decisions. Our analytics and reports provide insights to help you optimize your investment strategy."
        />
        <Investmentcards
          title="Withdraw Funds"
          content="In your SENTRAFUND account, you can decide to withdraw funds once you reach your account threshold."
        />
      </div>
    </section>
  );
}

export default Howitworks;
