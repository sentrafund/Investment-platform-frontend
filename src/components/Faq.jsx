import { useState } from "react";

const FaqItems = ({ index, title, content, isOpen, onClick }) => (
  <div className="">
    {/* border-b border-gray-200... if border is needed */}
    <button
      onClick={() => onClick(index)}
       className={`flex items-center w-full py-4 text-left text-lg font-semibold text-gray-800 transition-colors duration-600 ease-in-out ${
        isOpen ? "bg-amber-500 text-white p-3": '' }`}
    >
      {/* Icon on the left */}
      <span className=" p-3 mr-3 text-2xl select-none">{isOpen ? "−" : "+"}</span>
      {title}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="p-2 text-gray-600">{content}</p>
    </div>
  </div>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    { title: "How can i start investing in SENTRAFUND?", content: `To start investing, simply sign up on our platform, verify your account, and make your first deposit. You’ll gain access to all our investing tools and resources.` },
    { title: `Can I trade Bitcoin on this platform?`, content: "Yes, SENTRAFUND allows you to trade Bitcoin and other major cryptocurrencies securely and conveniently." },
    { title: "What are the benefits of investing in SENTRAFUND?", content: "SENTRAFUND offers professional asset management, competitive returns, diversified portfolios, and user-friendly investment tools to help grow your wealth confidently." },
    { title: "How safe is my money in SENTRAFUND?", content: "Your funds are protected with top-tier security measures, including encryption, two-factor authentication (2FA), and regulated asset management protocols." },
    { title: "What are the risks associated with investing with SENTRAFUND?", content: `As with any investment, there are risks including market volatility, potential losses, and economic shifts. We recommend you invest wisely and diversify your portfolio.`},
    { title: "How do I stay updated on SENTRAFUND news and updates?", content: "Stay informed by subscribing to our newsletter, following us on social media, and checking our official website for announcements and updates." },
  ];

  // Split data into two columns (3 each)
  const leftItems = data.slice(0, 3);
  const rightItems = data.slice(3, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h3 className="text-xl text-blue-950 text-center mb-5"> FAQs </h3>
      <h2 className="text-2xl mb-8 text-center"> Here are some questions you might have </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {leftItems.map((item, i) => {
            const globalIndex = i; // left side indexes: 0,1,2
            return (
              <FaqItems
                key={globalIndex}
                index={globalIndex}
                title={item.title}
                content={item.content}
                isOpen={openIndex === globalIndex}
                onClick={toggle}
              />
            );
          })}
        </div>

        <div>
          {rightItems.map((item, i) => {
            const globalIndex = i + 3; // right side indexes: 3,4,5
            return (
              <FaqItems
                key={globalIndex}
                index={globalIndex}
                title={item.title}
                content={item.content}
                isOpen={openIndex === globalIndex}
                onClick={toggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
