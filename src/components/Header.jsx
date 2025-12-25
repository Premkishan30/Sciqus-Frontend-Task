import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
   <div className="Header">
    <div className="menu-icon">
        <MenuIcon/>
    </div>
    <h1>My Website</h1>
   </div>
  );
};

export default Header