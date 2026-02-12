import React from "react";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <aside className="page-sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-task">Create Task</NavLink>
        <NavLink to="/display-task">Display Tasks</NavLink>
        <NavLink to="/task-report">Task Report</NavLink>
      </nav>
    </aside>
  );
};
export default SideBar;
