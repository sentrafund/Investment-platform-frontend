import Carousel from "./components/Courasel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Landing_page from "./pages/Landing_page";

function App() {
  return (
    <>
      <h1 className="text-6xl text-amber-600 text-center">SentraFund</h1>
      <Landing_page/>
      <Carousel/>
      <Howitworks/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
