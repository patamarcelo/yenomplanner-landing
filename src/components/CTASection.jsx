import React from "react";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";

const REGISTER_URL = "https://app.yenomplanner.com/register";
const LOGIN_URL = "https://app.yenomplanner.com/login";

export default function CTASection() {
  return (
    <Box sx={{ py: 7 }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(25,118,210,0.12), rgba(25,118,210,0.03))",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 950, mb: 1.5 }}>
            Comece a organizar sua vida financeira hoje
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Tenha mais clareza sobre suas contas, despesas e planejamento.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="center"
          >
            <Button variant="contained" size="large" href={REGISTER_URL}>
              Criar conta
            </Button>
            <Button variant="outlined" size="large" href={LOGIN_URL}>
              Já tenho conta
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}