import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login_image.svg";
import LoadingCircle from "../../assets/LoadingCircleAnimated.svg";
import { Link } from "react-router-dom";
import { MdEmail, MdLock, MdDangerous } from "react-icons/md";

const EMAIL_PATTERN = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

const LoginComponent = () => {
  const navigate = useNavigate();
  const [isTouched, setIsTouched] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [apiCallState, setApiCallState] = useState({
    isInProgress: false,
    isError: false,
    message: "",
  });
  const [loginBtn, setLoginBtn] = useState({
    value: "Log In",
    isDisabled: false,
  });

  useEffect(() => {
    // Auth Check

  }, [])

  useEffect(() => {

    if (validateLoginFields()) {
      setLoginBtn({ ...loginBtn, isDisabled: false });
    } else {
      setLoginBtn({ ...loginBtn, isDisabled: true });
    }
  }, [user]);

  const validateLoginFields = () =>
    EMAIL_PATTERN.test(user.email.trim()) && user.password ? true : false;

  // Verify User Credentials
  const verifyUserLogin = async (event) => {
    event.preventDefault();

    // Validate Credentials
    const validationStatus = validateLoginFields();
    if (!validationStatus) {
      console.log("Failed");
      return;
    }
    console.log("calling api");

    // Verify with API
  };

  return (
    <div className="flex-all-center align-items-center w-100 h-100 bg-cream">
      <img src={LoginImage} alt="Login SVG" className="login-image" />
      <div className="form-div">
        <form onSubmit={verifyUserLogin}>
          <h1 className="page-heading">Log In</h1>
          <div className="input-div">
            <MdEmail className="input-icon" />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="text-box"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !EMAIL_PATTERN.test(user.email) ? "input-icon c-red" : "input-icon c-red hide"
                }
              />
            </div>
          </div>
          <div className="input-div">
            <MdLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-box"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !user.password ? "input-icon c-red" : "input-icon c-red hide"
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
              loginBtn.isDisabled
                ? "blue-button loading-btn btn-disabled"
                : "blue-button loading-btn"
            }
            disabled={loginBtn.isDisabled}
          >
            {loginBtn.value}
            <img
              src={LoadingCircle}
              className={
                apiCallState.isInProgress ? "loading-img show" : "loading-img"
              }
              alt="Loading Circle"
            ></img>
          </button>
          <p className="last-line">
            No Account? <Link to="/signup">Signup Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
