import Carousel from "./components/Courasel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Landing_page from "./pages/Landing_page";
import SentrafundLogin from "./pages/login";
import SentrafundRegister from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Withdrawal from "./pages/Withdrawal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/login" element={<SentrafundLogin />} />
          <Route path="/register" element={<SentrafundRegister />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
