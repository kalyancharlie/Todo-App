import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-direction-row space-between align-items-center navbar todo-app-container">
      <h1 className="navbar-name">What's up,Rahul!</h1>
      <Link to="/login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="logout-icon"
        >
          <path d="M7.5 1v7h1V1h-1z" className="path" />
          <path
            d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
            className="path"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Navbar;
