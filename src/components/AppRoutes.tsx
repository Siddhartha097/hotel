import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Hero from "./Hero";
import Home from "@/pages/Home";
import OurStory from "@/pages/OurStory";
import Footer from "./Footer/Footer";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our_story" element={<OurStory />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRoutes;
