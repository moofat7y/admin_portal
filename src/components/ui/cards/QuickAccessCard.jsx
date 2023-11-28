import { Box, CardMedia } from "@mui/material";
import React from "react";

export default function QuickAccessCard({ icon, background }) {
  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: background,
        cursor: "pointer",
        flexShrink: "0",
      }}
    >
      <CardMedia
        component={"i"}
        sx={{ width: "24px", height: "24px" }}
        image={icon}
      />
    </Box>
  );
}
