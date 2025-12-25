import React from "react";
import { SideBarContent } from "./SidebarContent";

const SideBar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SideBarContent.map((item, index) => {
          return (
            <li 
            className="row"
            key={index} onClick={()=>window.open(item.link,"_blank")}> 
              <div id="icon">{item.icon}</div>
              <div id="title">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
