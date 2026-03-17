import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function SeoTextSection({ title, text }) {
    return (
        <Box component="section" sx={{ py: { xs: 5, md: 7 } }}>
            <Container maxWidth="md" >
                <Stack spacing={2} sx={{ textAlign: 'center'}}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: "1.7rem", md: "2.4rem" },
                            fontWeight: 900,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                            color: "text.secondary",
                        }}
                    >
                        {text}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}