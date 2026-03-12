import React from "react";
import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";

const items = [
    {
        icon: <InsightsRoundedIcon color="primary" sx={{ fontSize: 30 }} />,
        title: "Mais clareza financeira",
        text: "Veja com mais facilidade para onde o dinheiro está indo e como suas despesas se distribuem.",
    },
    {
        icon: <CreditScoreRoundedIcon color="primary" sx={{ fontSize: 30 }} />,
        title: "Controle de cartões e faturas",
        text: "Organize vencimentos, lançamentos no cartão, faturas abertas e parcelamentos em andamento.",
    },
    {
        icon: <CategoryRoundedIcon color="primary" sx={{ fontSize: 30 }} />,
        title: "Categorias personalizadas",
        text: "Adapte o sistema ao seu jeito de organizar, com categorias, cores e ícones próprios.",
    },
    {
        icon: <TimelineRoundedIcon color="primary" sx={{ fontSize: 30 }} />,
        title: "Acompanhamento visual",
        text: "Tenha uma visão mais consolidada com dashboards, indicadores e acompanhamento mensal.",
    },
];

export default function FeaturesSection() {
    return (
        <Box sx={{ py: { xs: 5, md: 7 } }}>
            <Container maxWidth="lg">
                <Typography variant="h3" sx={{ mb: 1.2 }}>
                    Um sistema pensado para organização real
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4, maxWidth: 760 }}
                >
                    Em vez de espalhar suas informações em vários lugares, você concentra
                    tudo em um ambiente único, mais claro e mais fácil de acompanhar.
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
                    {items.map((item) => (
                        <Card
                            key={item.title}
                            elevation={0}
                            sx={{
                                height: "100%",
                                borderRadius: 2,
                                border: "1px solid rgba(148,163,184,0.16)",
                                backgroundColor: "background.paper",
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ mb: 1.6 }}>{item.icon}</Box>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 1,
                                        fontWeight: 900,
                                        overflowWrap: "anywhere",
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        overflowWrap: "anywhere",
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}