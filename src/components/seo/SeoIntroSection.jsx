import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function SeoIntroSection({ title, subtitle }) {
    return (
        <Box
            component="section"
            sx={{
                pt: { xs: 12, md: 16 },
                pb: { xs: 8, md: 10 },
                background:
                    "linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(255,255,255,1) 100%)",
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3} sx={{ maxWidth: 820 }}>
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: "2.3rem", md: "4rem" },
                            fontWeight: 950,
                            lineHeight: 1.05,
                            letterSpacing: -1.5,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            color: "text.secondary",
                            lineHeight: 1.6,
                        }}
                    >
                        {subtitle}
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
                            variant="contained"
                            size="large"
                            href="https://app.yenomplanner.com"
                        >
                            Começar agora
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            href="https://wa.me/5551996329614"
                            target="_blank"
                        >
                            WhatsApp
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}