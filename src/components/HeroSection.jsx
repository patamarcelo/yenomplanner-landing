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
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { trackEvent } from "../utils/analytics";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const REGISTER_URL = "https://app.yenomplanner.com/register";
const WHATSAPP_URL =
  "https://wa.me/555197090862?text=Olá! Quero conhecer o YenomPlanner";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background:
          "radial-gradient(circle at top left, rgba(37,99,235,0.16), transparent 32%), radial-gradient(circle at top right, rgba(59,130,246,0.10), transparent 30%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 5 }}
          alignItems="center"
        >
          <Box sx={{ flex: 1 }}>
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
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4.5rem" },
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                mb: 2,
              }}
            >
              Controle suas
              <Box component="span" sx={{ color: "primary.main", display: "block" }}>
                contas, faturas e lançamentos
              </Box>
              em um só lugar
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                maxWidth: 700,
                mb: 3,
                lineHeight: 1.5,
              }}
            >
              O YenomPlanner ajuda você a organizar a vida financeira com mais
              clareza, acompanhar despesas, receitas, cartões, parcelamentos e
              contas correntes sem depender de planilhas confusas.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                href={REGISTER_URL}
                endIcon={<NorthEastRoundedIcon />}
                onClick={() => trackEvent("landing_register_clicked", { location: "hero" })}
                sx={{
                  minWidth: 220,
                  py: 1.5,
                  borderRadius: 999,
                  boxShadow: "0 18px 40px rgba(37,99,235,0.24)",
                }}
              >
                Criar conta grátis
              </Button>

              <Button
                variant="outlined"
                size="large"
                href={WHATSAPP_URL}
                startIcon={<WhatsAppIcon />}
                onClick={() => trackEvent("landing_whatsapp_clicked", { location: "hero" })}
                sx={{
                  minWidth: 220,
                  py: 1.5,
                  borderRadius: 999,
                }}
              >
                Falar no WhatsApp
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, width: "100%" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                border: "1px solid rgba(148,163,184,0.18)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.98))",
                boxShadow: "0 30px 60px rgba(15,23,42,0.10)",
              }}
            >
              <Stack spacing={2}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.2,
                    borderRadius: 1.6,
                    background: "rgba(37,99,235,0.06)",
                    border: "1px solid rgba(37,99,235,0.10)",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Saldo consolidado
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 950 }}>
                        R$ 12.480,90
                      </Typography>
                    </Box>

                    <AccountBalanceWalletRoundedIcon
                      sx={{ fontSize: 34, color: "primary.main" }}
                    />
                  </Stack>
                </Paper>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: 1.6,
                      border: "1px solid rgba(148,163,184,0.16)",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Faturas
                        </Typography>
                        <Typography sx={{ fontWeight: 900 }}>3 abertas</Typography>
                      </Box>
                      <CreditCardRoundedIcon color="primary" />
                    </Stack>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: 1.6,
                      border: "1px solid rgba(148,163,184,0.16)",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Lançamentos
                        </Typography>
                        <Typography sx={{ fontWeight: 900 }}>128 no mês</Typography>
                      </Box>
                      <ReceiptLongRoundedIcon color="primary" />
                    </Stack>
                  </Paper>
                </Stack>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2.2,
                    borderRadius: 1.6,
                    border: "1px solid rgba(148,163,184,0.16)",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Organização prática
                  </Typography>

                  <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Contas correntes</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 800 }}>
                        4 contas
                      </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Parcelamentos</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 800 }}>
                        12 ativos
                      </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Categorias</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 800 }}>
                        Personalizadas
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </Paper>
          </Box>
        </Stack>
        <Stack spacing={1.2} sx={{ mt: 2 }} direction={"col"} justifyContent={"space-around"}>
              <Stack direction="row" spacing={1} alignItems="center">
                <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#10B981" }} />
                <Typography variant="body2" color="text.secondary">
                  Sem planilhas confusas
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#10B981" }} />
                <Typography variant="body2" color="text.secondary">
                  Comece em menos de 1 minuto
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#10B981" }} />
                <Typography variant="body2" color="text.secondary">
                  Funciona no celular e computador
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#10B981" }} />
                <Typography variant="body2" color="text.secondary">
                  Visão centralizada do seu financeiro
                </Typography>
              </Stack>

              
            </Stack>
      </Container>
    </Box>
  );
}