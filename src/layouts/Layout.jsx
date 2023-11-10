import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/dashboard.css"

const Layout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="md:col-span-5">
        <Header />
        <div className="body-heigt">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
