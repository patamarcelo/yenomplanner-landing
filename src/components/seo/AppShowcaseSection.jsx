import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function AppShowcaseSection({
    title,
    subtitle,
    image,
}) {
    return (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={4} alignItems="center">
                    <Stack spacing={2} textAlign="center" maxWidth={1200}>
                        <Typography
                            sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, fontWeight: 900 }}
                        >
                            {title}
                        </Typography>

                        <Typography sx={{ color: "text.secondary" }}>
                            {subtitle}
                        </Typography>
                    </Stack>

                    <Box
                        component="img"
                        src={image}
                        alt="App preview"
                        sx={{
                            width: "100%",
                            maxWidth: 900,
                            borderRadius: 0,
                            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                        }}
                    />
                </Stack>
            </Container>
        </Box>
    );
}