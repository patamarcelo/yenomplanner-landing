import React from "react";
import {
    Box,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const controls = [
    "Lançamentos de receitas e despesas",
    "Contas correntes e saldos",
    "Cartões e faturas",
    "Parcelamentos",
    "Categorias personalizadas",
    "Indicadores e visão consolidada",
];

export default function ControlSection() {
    return (
        <Box sx={{ py: { xs: 5, md: 7 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ mb: 1.4 }}>
                            Controle o que realmente importa
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            O YenomPlanner foi pensado para ajudar você a sair do improviso e
                            ter uma rotina financeira mais organizada, visual e confiável.
                        </Typography>

                        <Stack spacing={1.2}>
                            {controls.map((item) => (
                                <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                                    <CheckCircleRoundedIcon color="primary" sx={{ fontSize: 22 }} />
                                    <Typography>{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                border: "1px solid rgba(148,163,184,0.16)",
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,1), rgba(248,250,252,0.98))",
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Ideal para quem quer:
                            </Typography>

                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                <Chip label="Mais organização" />
                                <Chip label="Menos planilhas" />
                                <Chip label="Mais clareza" />
                                <Chip label="Controle de cartões" />
                                <Chip label="Acompanhamento mensal" />
                                <Chip label="Gestão financeira pessoal" />
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}