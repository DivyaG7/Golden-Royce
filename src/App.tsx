import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "pages/Home";
import About from "pages/About";
import BuzzeBee from "pages/BuzzeBee";
import CyberSecurity from "pages/CyberSecurity";
import ItServices from "pages/ItServices";
import Contact from "pages/ContactUs";
import NoMatch from "pages/NoMatch";
import Splash from "pages/Splash";
import FAQ from "pages/FAQ"
import Policy from "pages/Policy"
function App() {
  const { pathname, hash } = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      const splashTimeout = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => {
        clearTimeout(splashTimeout);
      };
    } else {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, showSplash]);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="verticals/buzzebee" element={<BuzzeBee />} />
          <Route path="verticals/cyber" element={<CyberSecurity />} />
          <Route path="verticals/itservice" element={<ItServices />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="policy" element={<Policy />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
