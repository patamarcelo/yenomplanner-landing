import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { trackEvent } from "../utils/analytics";

const REGISTER_URL = "https://app.yenomplanner.com/register";
const LOGIN_URL = "https://app.yenomplanner.com/login";

export default function FinalCTASection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            textAlign: "center",
            border: "1px solid rgba(148,163,184,0.16)",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.10), rgba(255,255,255,0.96))",
            boxShadow: "0 25px 50px rgba(15,23,42,0.06)",
          }}
        >
          <Typography
            variant="h3"
            sx={{ mb: 1.2, fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            Comece a organizar sua vida financeira hoje
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 680, mx: "auto" }}
          >
            Tenha mais clareza sobre contas, despesas, cartões e planejamento em
            um ambiente mais visual e muito mais organizado.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              href={REGISTER_URL}
              endIcon={<NorthEastRoundedIcon />}
              onClick={() => trackEvent("landing_register_clicked", { location: "final_cta" })}
              sx={{ minWidth: 220, borderRadius: 999, py: 1.4 }}
            >
              Criar conta
            </Button>

            <Button
              variant="outlined"
              size="large"
              href={LOGIN_URL}
              onClick={() => trackEvent("landing_login_clicked", { location: "final_cta" })}
              sx={{ minWidth: 220, borderRadius: 999, py: 1.4 }}
            >
              Já tenho conta
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}