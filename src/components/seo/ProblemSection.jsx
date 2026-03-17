import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

export default function ProblemSection({ title, bullets }) {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 3, md: 2 },
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={10} sx={{marginTop: '40px'}}>
                    {title ? (
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "1.6rem",
                                    md: "2.2rem",
                                    lg: "2.4rem",
                                },
                                fontWeight: 900,
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                textAlign: "center",
                                maxWidth: { xs: "100%", md: 980, lg: 1120 },
                                mx: "auto",
                            }}
                        >
                            {title}
                        </Typography>
                    ) : null}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 1.2, sm: 2, md: 3 }}
                        useFlexGap
                        flexWrap="wrap"
                        justifyContent="space-between"
                        alignItems={{ xs: "flex-start", sm: "center" }}
                        sx={{
                            width: "100%",
                        }}
                    >
                        {bullets.map((text, index) => (
                            <Feature key={index} text={text} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
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
                flexShrink: 0,
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
                    whiteSpace: { xs: "normal", md: "nowrap" },
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
}