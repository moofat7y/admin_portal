import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
  checkboxClasses,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "/itranks.svg";
import lines from "../assets/auth/auth_lines.png";
import LangToggler from "../components/signin/LangToggler";
import FormInput from "../components/ui/inputs/FormInput";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import emailIcon from "../assets/auth/email.svg";
import passwordIcon from "../assets/auth/password.svg";

import { useFormik } from "formik";
import { successToast, warningToast } from "../utils/toasts";

export default function SignIn() {
  const [t] = useTranslation("global");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember_me: false,
    },
    onSubmit: (values) => signInHandler(values),
  });

  const signInHandler = (formData) => {
    try {
      const error = formData.remember_me;
      if (error) {
        throw new Error("حدث خطا اثناء التسجيل");
      }
      successToast("تم التسجيل بنجاح");
    } catch (error) {
      warningToast(error.message);
    }
  };

  return (
    <section className="signin">
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <LangToggler />
        <Box
          sx={{
            width: "35%",
            maxHeight: "594px",
            maxWidth: "580px",
            zIndex: 2,
            minWidth: {
              xs: "100%",
              sm: "400px",
            },
            backgroundColor: "#13233A",
            borderRadius: "10px",
            borderTop: "4px solid #377DFF",
            padding: {
              xs: "35px 20px",
              sm: "61px 40px",
            },
            boxShadow: "3px -5px 35px 0px rgba(255, 255, 255, 0.00)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component={"img"}
            sx={{ width: "51px", height: "76px" }}
            image={logo}
          />
          <Typography
            variant="h3"
            sx={{ color: "#FFFFFF", fontSize: "22px", marginTop: "16px" }}
          >
            {t("auth.title")}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <FormInput
              name={"email"}
              placeholder={t("auth.email_placeholder")}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              type={"email"}
              sx={{ marginTop: "35px" }}
              icon={emailIcon}
            />

            <PasswordInput
              name={"password"}
              value={formik.values.password}
              placeholder={t("auth.password_placeholder")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              type={"password"}
              sx={{ marginTop: "24px" }}
              icon={passwordIcon}
            />

            <FormControlLabel
              name="remember_me"
              sx={{
                color: "white",
                alignSelf: "start",
                margin: "10px 0px 0px 0px",
              }}
              control={
                <Checkbox
                  checked={formik.values.remember_me}
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: "white",
                    },
                  }}
                />
              }
              onChange={formik.handleChange}
              label={t("auth.remember_me")}
            />

            <Button
              color="primary"
              variant="contained"
              sx={{
                marginTop: "35px",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
              fullWidth={true}
              type="submit"
            >
              {t("auth.signin_btn")}
            </Button>
          </form>
        </Box>
        <CardMedia
          component={"img"}
          sx={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
          image={lines}
        />
      </Container>
    </section>
  );
}
