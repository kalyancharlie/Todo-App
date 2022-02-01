import "./styles.css";
import { Link } from "react-router-dom";
import SignUpImage from "../../assets/signup_image.svg";
import LoadingCircle from "../../assets/LoadingCircleAnimated.svg";
import { useState, useEffect } from "react";
import { MdPerson, MdEmail, MdDangerous, MdLock } from "react-icons/md";
import { EMAIL_PATTERN } from "../../constants/constants";
import { registerUser } from "../../api/Api";
import { TODO_LOGIN } from "../../constants/constants";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const [userDetails, setUserDetails] = useState(initialFormState);
  const [apiCallState, setApiCallState] = useState({
    isInProgress: false,
    isError: false,
    message: "",
  });
  const [registerBtn, setRegisterBtn] = useState({
    value: "Register",
    isDisabled: false,
  });

  // Confirm Password Check
  const confirmPasswordCheck = async (e) => {
    if (userDetails.password !== userDetails.confirmPassword) {
      return setApiCallState({
        ...apiCallState,
        isError: true,
        message: "Password not matching",
      });
    }
    setApiCallState({ ...apiCallState, isError: false, message: "" });
  };

  // Form Validator
  const validateRegisterFields = () =>
    userDetails.name.trim() &&
    EMAIL_PATTERN.test(userDetails.email.trim()) &&
    userDetails.password &&
    userDetails.password === userDetails.confirmPassword
      ? true
      : false;

  // Register User
  const verifyAndRegisterUser = async (event) => {
    try {
      event.preventDefault();
      // Validate User Details
      const validationStatus = validateRegisterFields();
      if (!validationStatus) return
      setRegisterBtn({
        ...registerBtn,
        value: "Please wait",
        isDisabled: true,
      });
      setApiCallState({
        ...apiCallState,
        isInProgress: true,
        isError: false,
        message: "",
      });
      // Register with API
      const { name, email, password } = userDetails;
      const { status, message } = await registerUser(name, email, password);
      setApiCallState({
        ...apiCallState,
        isInProgress: false,
        isError: true,
        message,
      });
      
    } catch (error) {
      setApiCallState({
        ...apiCallState,
        isInProgress: false,
        isError: true,
        message: error.message,
      });
    } finally {
      setRegisterBtn({ ...registerBtn, value: "Register", isDisabled: false });
    }
  };

  // Register Button State Update
  useEffect(() => {
    confirmPasswordCheck();
    if (validateRegisterFields()) {
      setRegisterBtn({ ...registerBtn, isDisabled: false });
    } else {
      setRegisterBtn({ ...registerBtn, isDisabled: true });
    }
  }, [userDetails]);

  return (
    <div className="flex-all-center align-items-center w-100 h-100 bg-cream">
      <img
        src={SignUpImage}
        alt="Signup SVG"
        className="login-image signup-img"
      />
      <div className="form-div signup-form">
        <form onSubmit={verifyAndRegisterUser}>
          <h1 className="page-heading">Sign Up</h1>
          <div className="input-div">
            <MdPerson className="input-icon" />
            <input
              type="text"
              placeholder="Your Name"
              className="text-box"
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !userDetails.name
                    ? "input-icon c-red"
                    : "input-icon c-red hide"
                }
              />
            </div>
          </div>
          <div className="input-div">
            <MdEmail className="input-icon" />
            <input
              type="text"
              placeholder="Your Email"
              className="text-box"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !EMAIL_PATTERN.test(userDetails.email.trim())
                    ? "input-icon c-red"
                    : "input-icon c-red hide"
                }
              />
            </div>
          </div>
          <div className="input-div">
            <MdLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="text-box"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !userDetails.password
                    ? "input-icon c-red"
                    : "input-icon c-red hide"
                }
              />
            </div>
          </div>
          <div className="input-div">
            <MdLock className="input-icon" />
            <input
              type="password"
              placeholder="Repeat your password"
              className="text-box"
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                })
              }
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !userDetails.confirmPassword
                    ? "input-icon c-red"
                    : "input-icon c-red hide"
                }
              />
            </div>
          </div>
          <p className="c-red todo-app-container mb-10">
            {apiCallState.isError && apiCallState.message}
          </p>
          <button
            type="submit"
            className={
              registerBtn.isDisabled
                ? "blue-button loading-btn btn-disabled"
                : "blue-button loading-btn"
            }
            disabled={registerBtn.isDisabled}
          >
            {registerBtn.value}{" "}
            <img
              src={LoadingCircle}
              className={
                apiCallState.isInProgress ? "loading-img show" : "loading-img"
              }
              alt="Loading Circle"
            ></img>
          </button>
          <p className="last-line">
            Already a Member? <Link to={TODO_LOGIN}>Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
