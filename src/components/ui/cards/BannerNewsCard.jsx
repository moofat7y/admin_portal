import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import bg1 from "../../../assets/image/cardBg1.png";
import bg2 from "../../../assets/image/cardBg2.png";
import icon from "../../../assets/image/cardIcon1.png";
import { useTranslation } from "react-i18next";
import NewsModal from "../modals/NewsModal";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function BannerNewsCard() {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const handleClickOpen = () => navigate("?modal=true");

  return (
    <>
      <Card
        sx={{
          width: "100%",
          position: "relative",
          padding: {
            xs: "20px 20px 10px",
            md: "29px 32px 20px",
          },
          background: "linear-gradient(180deg, #E5A500 0%, #926000 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "16px",
        }}
      >
        <CardMedia
          component={"img"}
          image={bg1}
          sx={{
            top: "0px",
            left: "-38px",
            width: "fit-content",
            height: "fit-content",
            backgroundSize: "contain",
            position: "absolute",
            objectFit: "contain",
          }}
        />
        <CardMedia
          component={"img"}
          image={bg2}
          sx={{
            bottom: "0px",
            left: "55px",
            width: "fit-content",
            height: "fit-content",
            backgroundSize: "contain",
            position: "absolute",
            objectFit: "contain",
          }}
        />
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: "800",
              marginBottom: "12px",
            }}
          >
            {t("home.banner_news_card.title")}
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "14px", fontWeight: "400" }}
          >
            {t("home.banner_news_card.description")}
          </Typography>

          <Button
            onClick={handleClickOpen}
            sx={{
              padding: "6px 35px",
              marginTop: "15px",
              borderRadius: "6px",
              fontWeight: "600",
            }}
            variant="contained"
            color="secondary"
          >
            نشر الان
          </Button>
        </Box>

        <CardMedia
          component={"img"}
          image={icon}
          sx={{
            width: { xs: "86px", md: "106px" },
            height: { xs: "100px", md: "120px" },
            objectFit: "contain",
            zIndex: "2",
          }}
        />
      </Card>
      {/* <NewsModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      /> */}
    </>
  );
}
