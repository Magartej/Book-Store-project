import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContex";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvide>
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow max-w-screen-2xl mx-auto px-4 py-6 w-full font-primary">
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </AuthProvide>
    </div>
  );
}

export default App;
