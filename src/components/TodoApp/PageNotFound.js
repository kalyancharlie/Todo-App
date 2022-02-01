import React from "react";
import "./styles.css";
import ErrorImage from "../../assets/404_Error_image.svg";
import { Link } from "react-router-dom";
import { TODO_DASHBOARD } from "../../constants/constants";

const PageNotFound = ({ props }) => {
  return (
    <div className="w-100 h-100 all-center">
      <img
        src={ErrorImage}
        alt="page-not-found"
        className="page-not-found-image"
      />
      <div className="t-center all-center">
        <h1 className="error-page-heading">Oops.. Page Not Found</h1>
        <p className="f-24">
          We can't seem to find the page you're looking for
        </p>
        <Link to={TODO_DASHBOARD} className="link-reset">
          <button className={"blue-button loading-btn error-page-button"}>
            Return to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
