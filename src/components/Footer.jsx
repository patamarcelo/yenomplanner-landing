import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 4,
        py: 4,
        borderTop: "1px solid rgba(148,163,184,0.16)",
        backgroundColor: "rgba(255,255,255,0.7)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={1}
        >
          <Typography variant="body2" color="text.secondary">
            © YenomPlanner
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Organização financeira com visão mais clara e prática
          </Typography>
        </Stack>
        <Button href="/controle-financeiro-pessoal">Controle financeiro pessoal</Button>
<Button href="/controle-cartao-de-credito">Controle de cartão de crédito</Button>
<Button href="/controle-de-gastos">Controle de gastos</Button>
<Button href="/planejamento-financeiro">Planejamento financeiro</Button>
      </Container>
    </Box>
  );
}