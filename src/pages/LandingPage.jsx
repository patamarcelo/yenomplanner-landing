import React from "react";
import { Box } from "@mui/material";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ControlSection from "../components/ControlSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FinalCTASection from "../components/FinalCTASection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ControlSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </Box>
  );
}