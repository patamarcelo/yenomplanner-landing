import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { trackEvent } from "../utils/analytics";

const WHATSAPP_URL =
    "https://wa.me/555197090862?text=Olá! Quero conhecer o YenomPlanner";

export default function FloatingWhatsApp() {
    return (
        <Fab
            component="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
                trackEvent("landing_whatsapp_clicked", { location: "floating_button" })
            }
            sx={{
                position: "fixed",
                right: 18,
                bottom: 18,
                zIndex: 50,
                backgroundColor: "#34D399",
                color: "#fff",
                boxShadow: "0 14px 34px rgba(0,0,0,0.18)",

                animation: "pulse 2.5s infinite",

                "@keyframes pulse": {
                    "0%": {
                        boxShadow: "0 0 0 0 rgba(52,211,153,0.6)",
                    },
                    "70%": {
                        boxShadow: "0 0 0 14px rgba(52,211,153,0)",
                    },
                    "100%": {
                        boxShadow: "0 0 0 0 rgba(52,211,153,0)",
                    },
                },

                "&:hover": {
                    backgroundColor: "#10B981",
                },
            }}
        >
            <WhatsAppIcon />
        </Fab>
    );
}