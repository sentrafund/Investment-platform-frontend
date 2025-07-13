import SentrafundLogin from "./components/auth/login";
import SentrafundRegister from "./components/auth/register";
import Carousel from "./components/Courasel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Landing_page from "./pages/Landing_page";

function App() {
  return (
    <>
      {/* <Landing_page />
      <Carousel />
      <Howitworks />
      <Faq />
      <Footer /> */}
      <SentrafundRegister/>
      {/* <SentrafundLogin/> */}
    </>
  );
}

export default App;
