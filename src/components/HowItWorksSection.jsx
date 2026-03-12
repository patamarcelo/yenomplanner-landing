import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const steps = [
  {
    n: "01",
    title: "Crie sua conta",
    text: "Comece em poucos segundos e acesse o ambiente do sistema.",
  },
  {
    n: "02",
    title: "Configure suas bases",
    text: "Cadastre contas, categorias e organize sua estrutura financeira.",
  },
  {
    n: "03",
    title: "Registre e acompanhe",
    text: "Lance movimentações, acompanhe cartões, faturas e parcelamentos.",
  },
  {
    n: "04",
    title: "Tenha visão consolidada",
    text: "Use os painéis e relatórios visuais para acompanhar sua evolução.",
  },
];

export default function HowItWorksSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 1.2 }}>
          Como funciona
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 760 }}
        >
          Um fluxo simples para você sair do caos e ter um financeiro mais
          organizado no dia a dia.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: 2,
          }}
        >
          {steps.map((step) => (
            <Paper
              key={step.n}
              elevation={0}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 2,
                border: "1px solid rgba(148,163,184,0.16)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 950,
                  color: "primary.main",
                  mb: 1.2,
                  letterSpacing: "0.08em",
                }}
              >
                {step.n}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 900,
                  overflowWrap: "anywhere",
                }}
              >
                {step.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflowWrap: "anywhere",
                }}
              >
                {step.text}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}