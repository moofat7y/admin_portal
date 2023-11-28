import React from "react";
import { Button, CardMedia, Typography } from "@mui/material";
import profileIcon from "../../assets/icons/profile.svg";
import arrowIcon from "../../assets/icons/chevron-down.svg";

export default function ProfileMenu() {
  return (
    <Button sx={{ display: "flex", gap: "15px" }}>
      <CardMedia
        component={"i"}
        image={profileIcon}
        sx={{
          width: {
            xs: "40px",
            md: "53px",
          },
          aspectRatio: "1/1",
          backgroundSize: "contain",
          borderRadius: "50%",
        }}
      />

      <Typography
        sx={{
          fontWeight: "700",
          color: "#000",
          fontSize: { xs: "12px", md: "16px" },
        }}
      >
        عمر احمد الالفي
      </Typography>

      <CardMedia
        component={"i"}
        image={arrowIcon}
        sx={{
          width: {
            xs: "18px",
            md: "24px",
          },
          aspectRatio: "1/1",
          backgroundSize: "contain",
        }}
      />
    </Button>
  );
}
