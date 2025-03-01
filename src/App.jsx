import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Start from "./components/Start.jsx";
import FAQ from "./components/FAQ.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Popup from "./components/Popup.jsx";
import Careers from "./components/Careers.jsx";
import ApplyPage from "./components/ApplyPage.jsx";

function App() {
  const { pathname, hash, key } = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Analytics />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Components specific to the home page */}
              <Navbar />

              <Header />
              <Services />
              <About />
              <Start />
              <Testimonials />
              <FAQ />
              <Team />
              <Contact />
              <Footer openPopup={openPopup} />
              {isPopupOpen && <Popup closePopup={closePopup} />}
            </>
          }
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply/:jobId" element={<ApplyPage />} />
      </Routes>

    </>
  );
}

export default App;
