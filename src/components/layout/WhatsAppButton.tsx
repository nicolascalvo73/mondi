"use client";

import { Fab, keyframes } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 0.625rem rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

export default function WhatsAppButton() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493516283916";

  return (
    <Fab
      color="primary"
      aria-label="Escribinos por WhatsApp"
      href="https://wa.me/3516283916?text=Hola%20Mondi%20Studio"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        width: "5rem",
        height: "5rem",
        backgroundColor: "#25D366",
        "&:hover": {
          backgroundColor: "#1da851",
        },
        animation: `${pulse} 2s infinite`,
        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: "3rem" }} />
    </Fab>
  );
}
