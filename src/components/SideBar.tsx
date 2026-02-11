import React from "react";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <aside className="page-sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-task">Create Task</NavLink>
        <NavLink to="/edit-task">Edit Task</NavLink>
        <NavLink to="/display-task">Display Tasks</NavLink>
      </nav>
    </aside>
  );
};
export default SideBar;
