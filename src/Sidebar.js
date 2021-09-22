import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Paulo Thomaz</h2>
        <h4>p.thomaz.junior@gmail.com</h4>
      </div>

      <div className="sidebar__status">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
