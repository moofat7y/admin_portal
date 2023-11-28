import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import NewsModal from "../components/ui/modals/NewsModal";
import NewsDetails from "../components/ui/modals/NewsDetails";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#F7F7F9" }}>
        <Outlet />
      </main>
      <NewsModal />
      <NewsDetails />
    </>
  );
}
