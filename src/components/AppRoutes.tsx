import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Hero from "./Hero";
import Home from "@/pages/Home";
import OurStory from "@/pages/OurStory";
import Footer from "./Footer/Footer";
import Explore from "@/pages/Explore";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our%story" element={<OurStory />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoutes;
