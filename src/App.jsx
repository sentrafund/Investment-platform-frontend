import Carousel from "./components/Courasel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Landing_page from "./pages/Landing_page";
import SentrafundLogin from "./pages/login";
import SentrafundRegister from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Withdrawal from "./pages/Withdrawal";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import { AdminProvider } from "./context/AdminContext";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";

// let link = /password-reset/confirm/l/ctat4z-df1e120a3a5bc78cd768d0e7812fdd7b
function App() {
  return (
    <>
      <AdminProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/login" element={<SentrafundLogin />} />
            <Route path="/register" element={<SentrafundRegister />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/admin" element={<AdminDashboard />}></Route>
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/password-reset/confirm/:uid/:token"
              element={<PasswordResetConfirm />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  {/* <Dashboard /> */}
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AdminProvider>
    </>
  );
}

export default App;
