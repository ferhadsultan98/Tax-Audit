import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import "./AdminLayout.scss";
import { BsJournalCheck } from "react-icons/bs";

const AdminLayout = ({ children, title }) => {
  const [activeSection, setActiveSection] = useState("blogs");

  return (
    <div className="adminLayout">
      <aside className="sidebar">
        <div className="sidebarHeader">
          <div className="logo">Admin Panel</div>
          <div className="adminTitle">TACS</div>
        </div>
        <nav className="navMenu">
          <ul>
            <li>
              <a
                href="#blogs"
                className={activeSection === "blogs" ? "active" : ""}
                onClick={() => setActiveSection("blogs")}
              >
                <span className="icon">
                  <BsJournalCheck />
                </span>
                Blogs
              </a>
            </li>
            <li className="logoutItem">
              <a
                href="/login"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                }}
              >
                <span className="icon">
                  <FiLogOut />
                </span>{" "}
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="mainContent">
        <div className="contentWrapper">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
