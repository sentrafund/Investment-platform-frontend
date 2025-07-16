import { useState } from "react";

// FAQ Item Component
const FaqItems = ({ index, title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={() => onClick(index)}
      className={`flex items-center w-full text-left text-base sm:text-lg font-semibold transition-colors duration-300 hover:cursor-pointer ${
        isOpen
          ? "bg-amber-500 text-white"
          : "text-gray-800 hover:text-amber-500"
      } px-4 py-3 rounded-md`}
      aria-expanded={isOpen}
      aria-controls={`faq-content-${index}`}>
      <span className="text-2xl mr-3 select-none ">{isOpen ? "−" : "+"}</span>
      {title}
    </button>

    <div
      id={`faq-content-${index}`}
      className={`overflow-hidden transition-all duration-300 px-4 ${
        isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  </div>
);

// FAQ Main Section
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "How can I start investing in SENTRAFUND?",
      content:
        "To start investing, simply sign up on our platform, verify your account, and make your first deposit. You’ll gain access to all our investing tools and resources.",
    },
    {
      title: "Can I trade Bitcoin on this platform?",
      content:
        "Yes, SENTRAFUND allows you to trade Bitcoin and other major cryptocurrencies securely and conveniently.",
    },
    {
      title: "What are the benefits of investing in SENTRAFUND?",
      content:
        "SENTRAFUND offers professional asset management, competitive returns, diversified portfolios, and user-friendly investment tools to help grow your wealth confidently.",
    },
    {
      title: "How safe is my money in SENTRAFUND?",
      content:
        "Your funds are protected with top-tier security measures, including encryption, two-factor authentication (2FA), and regulated asset management protocols.",
    },
    {
      title: "What are the risks associated with investing?",
      content:
        "As with any investment, there are risks including market volatility, potential losses, and economic shifts. We recommend you invest wisely and diversify your portfolio.",
    },
    {
      title: "How do I stay updated on SENTRAFUND news?",
      content:
        "Stay informed by subscribing to our newsletter, following us on social media, and checking our official website for announcements and updates.",
    },
  ];

  // Split for 2-column layout
  const leftItems = data.slice(0, 3);
  const rightItems = data.slice(3, 6);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h3 className="text-blue-950 text-lg text-center mb-2">FAQs</h3>
      <h2 className="text-2xl sm:text-3xl text-center font-semibold mb-10">
        Here are some questions you might have
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {leftItems.map((item, i) => (
            <FaqItems
              key={i}
              index={i}
              title={item.title}
              content={item.content}
              isOpen={openIndex === i}
              onClick={toggle}
            />
          ))}
        </div>

        <div className="space-y-4 ">
          {rightItems.map((item, i) => {
            const globalIndex = i + 3;
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
    </section>
  );
};

export default Faqs;
