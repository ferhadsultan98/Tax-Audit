import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const to = "/" + paths.slice(0, index + 1).join("/");
        const name = path.charAt(0).toUpperCase() + path.slice(1);
        return (
          <span key={to}>
            {" > "}
            <Link to={to}>{name}</Link>
         
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
