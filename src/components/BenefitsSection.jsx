import React from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";

const items = [
  {
    icon: <InsightsRoundedIcon color="primary" />,
    title: "Visualização clara",
    text: "Entenda rapidamente sua situação financeira sem depender de planilhas confusas.",
  },
  {
    icon: <AccountBalanceWalletRoundedIcon color="primary" />,
    title: "Controle real",
    text: "Acompanhe contas, saldos, entradas e saídas com mais precisão.",
  },
  {
    icon: <ReceiptLongRoundedIcon color="primary" />,
    title: "Faturas organizadas",
    text: "Gerencie cartões, vencimentos e parcelamentos com mais tranquilidade.",
  },
];

export default function BenefitsSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 3 }}>
          Por que usar o YenomPlanner?
        </Typography>

        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card sx={{ height: "100%", borderRadius: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 1 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}