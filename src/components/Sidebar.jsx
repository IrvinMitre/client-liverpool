import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="sidbar-configured xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 p-8">
        <Link className="element-sidebar block" to="/">
          Home
        </Link>

        <Link className="element-sidebar block" to="/uploadFile">
          Ordenes
        </Link>
      </div>
      <div className="sidbar-menu xl:hidden">
        <button className="p-2" onClick={toggleMenu}>
          Menu
        </button>
        {isOpen && (
          <div className="sidbar-configured fixed w-full h-full left-0 top-0 bg-red p-8">
            <Link className="element-sidebar block" to="/" onClick={toggleMenu}>
              Home
            </Link>

            <Link
              className="element-sidebar block"
              to="/uploadFile"
              onClick={toggleMenu}
            >
              Ordenes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
