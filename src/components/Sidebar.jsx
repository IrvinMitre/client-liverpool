import React from "react";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate();


  return (
    <div className="xl:h-[95vh] sidebar-configured">
      <h2 onClick={() => navigate('/')} >Home</h2>
      <h1 onClick={() => navigate('/uploadFile')}>Ordenes</h1>
    </div>
  );
};

export default Sidebar;
