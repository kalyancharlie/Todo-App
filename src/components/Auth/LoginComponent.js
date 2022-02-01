import "./styles.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginImage from "../../assets/login_image.svg";
import LoadingCircle from "../../assets/LoadingCircleAnimated.svg";
import { Link } from "react-router-dom";
import { MdEmail, MdLock, MdDangerous } from "react-icons/md";
import {EMAIL_PATTERN} from '../../constants/constants'
import {authenticateUser, verifyToken, renewToken} from '../../api/Api'
import {isTokenExpired, verifySession} from '../../utils/AuthUtil'
import {TodoContext} from "../TodoApp"
import { TODO_REGISTER, TODO_DASHBOARD, TODO_SESSION_LOGOUT } from "../../constants/constants";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const {user, setUser} = useContext(TodoContext)
  const [userDetails, setUserDetails] = useState({ email: "k@k.com", password: "k" });
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
    // Logout Message
    if (state?.message === TODO_SESSION_LOGOUT) {
      return setApiCallState({...apiCallState, isError: true, message: TODO_SESSION_LOGOUT})
    }
    // Other Message from Protected Route if any
    if (state?.message) {
      setApiCallState({...apiCallState, isError: true, message: state.message})
    }
    // Auth Check
    verifySession(user, setUser, isTokenExpired, renewToken, verifyToken).then(({status, message}) => {
      console.log('PROMISE', status, message)
      if (status) {
        return navigate(TODO_DASHBOARD, {canLogin: true})
      }
      setApiCallState({...apiCallState, isAuthenticated: false, isLoggedIn: false, isError: true, message})
    }).catch(error => {
      console.log('promise error')
      console.log(error)
    })
  }, [])

  useEffect(() => {
    if (validateLoginFields()) {
      setLoginBtn({ ...loginBtn, isDisabled: false });
    } else {
      setLoginBtn({ ...loginBtn, isDisabled: true });
    }
  }, [userDetails]);

  const validateLoginFields = () =>
    EMAIL_PATTERN.test(userDetails.email.trim()) && userDetails.password ? true : false;

  // Verify User Credentials
  const verifyUserLogin = async (event) => {
    try {
      event.preventDefault();
      setLoginBtn({ ...loginBtn, value: 'Please wait', isDisabled: true });

      // Validate Credentials
      const validationStatus = validateLoginFields();
      if (!validationStatus) {
        console.log("Failed");
        return;
      }

      // Verify with API
      setApiCallState({...apiCallState, isInProgress: true})
      const data = await authenticateUser(userDetails.email, userDetails.password)
      console.log("inseprct")
      console.log(data)
      const {status, message, accessToken, name, email} = data
      console.log(accessToken)
      if (status) {
        setUser({...user, isAuthenticated: true, isLoggedIn: true, accessToken, name, email})
        return navigate(TODO_DASHBOARD, {replace: true, state: {canLogin: true}})
      }
      setApiCallState({...apiCallState, isError: true, message, isInProgress: false})
      setLoginBtn({ ...loginBtn, value: 'Log In', isDisabled: false });

    } catch (error) {
      console.log('compnent api error')
      setApiCallState({...apiCallState, isInProgress: false, isError: true, message: error.message})
      setLoginBtn({ ...loginBtn, value: 'Log In', isDisabled: false });
    }
    
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
              value={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !EMAIL_PATTERN.test(userDetails.email) ? "input-icon c-red" : "input-icon c-red hide"
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
              value={userDetails.password}
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !userDetails.password ? "input-icon c-red" : "input-icon c-red hide"
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
            No Account? <Link to={TODO_REGISTER}>Signup Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
