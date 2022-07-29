import React from "react";
import logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="sidebar">
      {/*Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/*Menu */}
      <div className="menu">
        {SidebarData.map((item, index) =>{
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              //className="menuItem active"
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          )
        } )}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
