import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

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
              position: "relative",
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
                fontSize: {
                  xs: "2.4rem",
                  sm: "3rem",
                  md: "4.1rem",
                  lg: "4.5rem",
                },
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

          {/* RIGHT SIDE IMAGE + FLOATING BADGES */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { md: -70, lg: -120 },
              top: { md: "50%" },
              transform: { md: "translateY(-50%)" },
              width: { xs: "100%", md: "60%", lg: "65%" },
              display: { xs: "none", md: "block" },
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
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
                  display: "block",
                  filter: "drop-shadow(0 50px 90px rgba(0,0,0,0.22))",
                  transform: { md: "scale(1.03)", lg: "scale(1.08)" },
                  transformOrigin: "center center",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              <HeroBadge
                icon={<CreditCardRoundedIcon sx={{ fontSize: 20 }} />}
                title="Faturas a vencer"
                value="R$ 9.758,95"
                subtitle="Inter + Nubank • abr/2026"
                iconBg="#DCFCE7"
                iconColor="#16A34A"
                sx={{
                  top: { md: "8%", lg: "-4%" },
                  right: { md: "-13%", lg: "-11%" },
                  zIndex: 4,
                }}
              />

              <HeroBadge
                icon={<TrendingUpRoundedIcon sx={{ fontSize: 20 }} />}
                title="Receitas previstas"
                value="R$ 23.500,00"
                subtitle="Entrada esperada • maio/2026"
                iconBg="#DBEAFE"
                iconColor="#2563EB"
                sx={{
                  top: { md: "37%", lg: "32%" },
                  right: { md: "-7%", lg: "-19%" },
                  zIndex: 4,
                }}
              />

              <HeroBadge
                icon={<AccountBalanceWalletRoundedIcon sx={{ fontSize: 20 }} />}
                title="Custos fixos"
                value="R$ 8.609,70"
                subtitle="Bills consolidadas • abr/2026"
                iconBg="#FEF3C7"
                iconColor="#D97706"
                sx={{
                  top: { md: "66%", lg: "68%" },
                  right: { md: "-4%", lg: "-11%" },
                  zIndex: 4,
                }}
              />
            </Box>
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

function HeroBadge({
  icon,
  title,
  value,
  subtitle,
  iconBg,
  iconColor,
  sx = {},
}) {
  return (
    <Box
      component={Paper}
      elevation={8}
      sx={{
        position: "absolute",
        minWidth: { md: 220, lg: 260 },
        maxWidth: { md: 250, lg: 290 },
        p: { md: 1.5, lg: 1.8 },
        borderRadius: 1.6,
        background: "rgba(255,255,255,0.42)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(148,163,184,0.8)",
        boxShadow: "0 24px 50px rgba(15,23,42,0.14)",
        ...sx,
      }}
    >
      <Stack direction="row" spacing={1.2} alignItems="flex-start">
        <Box
          sx={{
            width: 38,
            height: 38,
            minWidth: 38,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: iconBg,
            color: iconColor,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.55)",
          }}
        >
          {icon}
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: { md: "0.82rem", lg: "0.88rem" },
              fontWeight: 700,
              color: "text.secondary",
              lineHeight: 1.2,
              mb: 0.4,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { md: "1.05rem", lg: "1.25rem" },
              fontWeight: 900,
              lineHeight: 1.1,
              color: "text.primary",
              mb: 0.45,
            }}
          >
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: { md: "0.72rem", lg: "0.78rem" },
              fontWeight: 600,
              color: "text.secondary",
              lineHeight: 1.2,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>
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
      <TaskAltRoundedIcon
        sx={{ fontSize: 18, color: "#10B981", flexShrink: 0 }}
      />
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