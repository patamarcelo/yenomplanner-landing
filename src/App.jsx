import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SeoLandingPage from "./pages/SeoLandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/controle-financeiro-pessoal"
          element={<SeoLandingPage pageKey="finance" />}
        />
        <Route
          path="/controle-cartao-de-credito"
          element={<SeoLandingPage pageKey="card" />}
        />
        <Route
          path="/controle-de-gastos"
          element={<SeoLandingPage pageKey="expenses" />}
        />
        <Route
          path="/planejamento-financeiro"
          element={<SeoLandingPage pageKey="planning" />}
        />
      </Routes>
    </BrowserRouter>
  );
}