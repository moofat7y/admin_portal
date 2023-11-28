import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import TranslationProvider from "./translation/TranslationProvider.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#377DFF",
    },
    secondary: {
      main: "#fff",
    },
    grey: {
      main: "#919191",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <TranslationProvider>
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-left" />
      <App />
    </ThemeProvider>
  </TranslationProvider>
);
