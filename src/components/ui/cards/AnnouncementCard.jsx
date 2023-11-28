import { Box, Card, CardMedia, IconButton } from "@mui/material";
import React from "react";

import editIcon from "../../../assets/icons/edit.svg";

export default function AnnouncementCard({ image }) {
  return (
    <>
      <Card sx={{ width: "100%", backgroundColor: "#F6F6F6" }}>
        <Box
          className="special-news-card"
          sx={{ height: "140px", width: "100%", position: "relative" }}
        >
          <CardMedia
            component="img"
            alt="speical new image"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            image={image}
          />

          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#383C404D",
              backdropFilter: "blur(3px)",
              opacity: 0,
              transition: "0.3s",
            }}
            className="card-layer"
          >
            <IconButton>
              <CardMedia
                component={"i"}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundImage: "contain",
                }}
                image={editIcon}
              />
            </IconButton>
          </div>
        </Box>
      </Card>
    </>
  );
}
