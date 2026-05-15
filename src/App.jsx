import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import useMagnetic from "./components/useMagnetic";
import WebGLBackground from "./components/WebGLBackground";
import FAQ from "./components/FAQ";

function App() {
  useMagnetic();

  return (
    <>
      <WebGLBackground />
      <Cursor />

      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST */}
      <Clients />

      {/* 3. AUTHORITY */}
      <ExperienceSection />

      {/* 4. VALUE */}
      <Services />

      {/* 5. PROCESS */}
      <Process />

      {/* 6. PROOF */}
      <Portfolio />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. BRAND STORY */}
      <About />

      {/* 9. OBJECTIONS */}
      <FAQ />

      {/* 10. CONVERSION */}
      <CTA />

      {/* 11. FOOTER */}
      <Footer />
    </>
  );
}

export default App;
