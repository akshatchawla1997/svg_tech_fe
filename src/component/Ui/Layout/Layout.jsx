import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import TopHeader from "../Top-header/TopHeader";
import Footer from "../Footer/Footer";
export function Layout() {
  return (
    <div className="container">
      <header className="w-screen">
        <TopHeader />
        <Header />
      </header>
      <main className="">
        <div className="">
          <Outlet />
        </div>
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
