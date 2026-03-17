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
import SeoHead from "../components/SeoHead";

export default function LandingPage() {
  return (
    <Box>
      <SeoHead
        title="YenomPlanner | Controle financeiro simples e inteligente"
        description="Organize gastos, cartões, faturas e planejamento financeiro em um só lugar com o YenomPlanner."
        canonical="https://www.yenomplanner.com/"
        keywords="controle financeiro, app financeiro, controle de gastos, cartão de crédito, planejamento financeiro"
      />

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