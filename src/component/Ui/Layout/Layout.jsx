import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../Top-header/TopHeader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="container ">
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
};

export default Layout;
