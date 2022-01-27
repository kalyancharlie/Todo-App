import "./styles.css";
import { Link } from "react-router-dom";
import SignUpImage from "../../assets/signup_image.svg";
import { useState, useEffect } from "react";

const EMAIL_PATTERN = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const [userDetails, setUserDetails] = useState(initialFormState);

  useEffect(() => {}, []);

  const validateRegisterFields = () =>
    userDetails.name.trim() &&
    EMAIL_PATTERN.test(userDetails.email.trim()) &&
    userDetails.password &&
    userDetails.password === userDetails.confirmPassword
      ? true
      : false;

  const registerUser = (event) => {
    event.preventDefault();

    // Validate User Details
    const validationStatus = validateRegisterFields();
    if (!validationStatus) {
      console.log("Failed");
      return;
    }
    console.log("calling api");
    // Register with API
  };

  const runValidation = (event) => {
    event.preventDefault();
    const enteredPassword = document.getElementById("signupPasswordEl").value;
    const enteredName = document.getElementById("signupNameEl").value;
    const repeatedPassword = document.getElementById(
      "signupRepeatedPasswordEl"
    ).value;
    const enteredEmail = document.getElementById("signupEmailEl").value;

    if (enteredName === "") {
      document.getElementById("signupNameErrorMsg").classList.remove("hide");
    } else {
      document.getElementById("signupNameErrorMsg").classList.add("hide");
    }

    if (enteredEmail === "") {
      document.getElementById("signupEmailErrorMsg").classList.remove("hide");
    } else if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)) {
      document.getElementById("signupEmailErrorMsg").classList.add("hide");
    } else {
      document.getElementById("signupEmailErrorMsg").classList.remove("hide");
    }

    if (enteredPassword === "") {
      document
        .getElementById("signupPasswordErrorMsg")
        .classList.remove("hide");
    } else {
      document.getElementById("signupPasswordErrorMsg").classList.add("hide");
    }

    if (repeatedPassword === "" || enteredPassword !== repeatedPassword) {
      document
        .getElementById("signupRepeatedPasswordErrMsg")
        .classList.remove("hide");
    } else {
      document
        .getElementById("signupRepeatedPasswordErrMsg")
        .classList.add("hide");
    }
  };

  return (
    <div className="flex-all-center align-items-center w-100 h-100 bg-cream">
      <img
        src={SignUpImage}
        alt="Signup SVG"
        className="login-image signup-img"
      />
      <div className="form-div signup-form">
        <form onSubmit={registerUser}>
          <h1 className="page-heading">Sign Up</h1>
          <div className="input-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-fill input-icon"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <input
              type="text"
              placeholder="Your Name"
              id="signupNameEl"
              className="text-box"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="signupNameErrorMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill c-red hide input-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <div className="input-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              className="bi bi-envelope-open-fill input-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg>
            <input
              type="text"
              placeholder="Your Email"
              id="signupEmailEl"
              className="text-box"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="signupEmailErrorMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill c-red hide input-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <div className="input-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-lock-fill input-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              id="signupPasswordEl"
              className="text-box"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="signupPasswordErrorMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill c-red hide input-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <div className="input-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-lock input-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
            <input
              type="password"
              placeholder="Repeat your password"
              className="text-box"
              id="signupRepeatedPasswordEl"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="signupRepeatedPasswordErrMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill c-red hide input-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="c-red todo-app-container mb-10" id="signupPageErrMsg">
            Show if Any Error
          </p>
          <button type="submit" className="blue-button">
            Register
          </button>
          <p className="last-line">
            Already a Member? <Link to="/login">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
