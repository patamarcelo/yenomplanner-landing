import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { trackEvent } from "../utils/analytics";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const REGISTER_URL = "https://app.yenomplanner.com/register";
const LOGIN_URL = "https://app.yenomplanner.com/login";



export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.82)",
        borderBottom: "1px solid rgba(148,163,184,0.18)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="YenomPlanner"
              sx={{
                height: 68,
                width: "auto",
                display: "block",
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1.2} alignItems="center">
            <Button
              variant="text"
              href={LOGIN_URL}
              onClick={() => trackEvent("landing_login_clicked", { location: "header" })}
            >
              Entrar
            </Button>

            <Button
              variant="contained"
              href={REGISTER_URL}
              onClick={() => trackEvent("landing_register_clicked", { location: "header" })}
              sx={{
                px: 2.2,
                borderRadius: 999,
                boxShadow: "0 10px 30px rgba(37,99,235,0.22)",
              }}
            >
              Criar conta
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}