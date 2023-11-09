import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className=" grid grid-cols-8">
      <Sidebar />
      <div className="xl:col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;