import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

const SideBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <aside className="page-sidebar">
        <nav className="sidebar-nav">
          <NavLink to="/">Home</NavLink>
          {isAuthenticated && <NavLink to="/add-task">Create Task</NavLink>}
          {isAuthenticated && (
            <NavLink to="/display-task">Display Tasks</NavLink>
          )}
          {isAuthenticated && <NavLink to="/task-report">Task Report</NavLink>}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
