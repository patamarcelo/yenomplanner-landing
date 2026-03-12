import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { trackEvent } from "../utils/analytics";

import heroDashboard from "../assets/hero-dashboard.png";

const REGISTER_URL = "https://app.yenomplanner.com/register";

const WHATSAPP_URL =
  "https://wa.me/555197090862?text=Olá! Quero conhecer o YenomPlanner";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        py: { xs: 8, md: 10, lg: 12 },
        background:
          "radial-gradient(circle at top left, rgba(37,99,235,0.16), transparent 32%), radial-gradient(circle at top right, rgba(59,130,246,0.10), transparent 30%)",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 4, lg: 2 }}
          alignItems="center"
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              width: { xs: "100%", md: "48%" },
              maxWidth: { xs: "100%", md: 620 },
              zIndex: 2,
            }}
          >
            <Chip
              label="Organização financeira com visão prática"
              sx={{
                mb: 2,
                fontWeight: 800,
                backgroundColor: "rgba(37,99,235,0.10)",
                color: "primary.main",
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "2.4rem", sm: "3rem", md: "4.1rem", lg: "4.5rem" },
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                mb: 2,
                maxWidth: 760,
              }}
            >
              Controle suas
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "primary.main",
                }}
              >
                contas, faturas e lançamentos
              </Box>
              em um só lugar
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.08rem", lg: "1.12rem" },
                color: "text.secondary",
                maxWidth: 560,
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              O YenomPlanner ajuda você a organizar a vida financeira com mais
              clareza, acompanhar despesas, receitas, cartões, parcelamentos e
              contas correntes sem depender de planilhas confusas.
            </Typography>

            {/* CTA */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: { xs: 4, md: 5 } }}
            >
              <Button
                variant="contained"
                size="large"
                href={REGISTER_URL}
                endIcon={<NorthEastRoundedIcon />}
                onClick={() =>
                  trackEvent("landing_register_clicked", { location: "hero" })
                }
                sx={{
                  minWidth: 220,
                  py: 1.5,
                  px: 3,
                  borderRadius: 999,
                  boxShadow: "0 20px 50px rgba(37,99,235,0.30)",
                }}
              >
                Criar conta grátis
              </Button>

              <Button
                variant="outlined"
                size="large"
                href={WHATSAPP_URL}
                startIcon={<WhatsAppIcon />}
                onClick={() =>
                  trackEvent("landing_whatsapp_clicked", { location: "hero" })
                }
                sx={{
                  minWidth: 220,
                  py: 1.5,
                  px: 3,
                  borderRadius: 999,
                }}
              >
                Falar no WhatsApp
              </Button>
            </Stack>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { md: -120, lg: -160 },
              top: { md: "50%" },
              transform: { md: "translateY(-50%)" },
              width: { md: "60%", lg: "65%" },
              display: { xs: "none", md: "block" },
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <Box
              component="img"
              src={heroDashboard}
              alt="YenomPlanner Dashboard"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 50px 90px rgba(0,0,0,0.25))",
                transform: "scale(1.1)",
              }}
            />
          </Box>
        </Stack>

        {/* BULLETS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.2, sm: 2, md: 3 }}
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{
            width: "100%",
            mt: { xs: 4, md: 2 },
            pt: { xs: 0, md: 1 },
          }}
        >
          <Feature text="Sem planilhas confusas" />
          <Feature text="Comece em menos de 1 minuto" />
          <Feature text="Funciona no celular e computador" />
          <Feature text="Visão centralizada do seu financeiro" />
        </Stack>
      </Container>
    </Box>
  );
}

function Feature({ text }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        minWidth: { xs: "100%", sm: "auto" },
        flex: { xs: "unset", md: 1 },
        justifyContent: { xs: "flex-start", md: "center" },
      }}
    >
      <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#10B981", flexShrink: 0 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}