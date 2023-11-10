import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="sidbar-configured xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 p-8">
        <p className="element-sidebar" onClick={() => {navigate("/")}}>
          Home
        </p>
        <p className="element-sidebar" onClick={() => navigate("/uploadFile")}>
          Ordenes
        </p>
      </div>
      <div className="xl:hidden bg-red">
        <button className="text-black p-2" onClick={toggleMenu}>
          Menu
        </button>
        {isOpen && (
          <div className="sidbar-configured fixed w-full h-full left-0 top-0 bg-red p-8">
            <p className="element-sidebar" onClick={() => {toggleMenu(); navigate("/")}}>
              Home
            </p>
            <p
              className="element-sidebar"
              onClick={() => {toggleMenu(); navigate("/uploadFile")}}
            >
              Ordenes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
