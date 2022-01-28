import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "../../assets/signup_image.svg";
import LoadingCircle from '../../assets/LoadingCircleAnimated.svg'
import { useState, useEffect } from "react";
import { MdPerson, MdEmail, MdDangerous, MdLock } from "react-icons/md";

const EMAIL_PATTERN = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupComponent = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(initialFormState);
  const [apiCallState, setApiCallState] = useState({isInProgress: false, isError: false, message: ''})
  const [registerBtn, setRegisterBtn] = useState({value: 'Register', isDisabled: false})

  // Register Button State Update
  useEffect(() => {
    // setTimeout(() => setRegisterBtn({...registerBtn, value: 'loading', isDisabled: true}), 2000)
    if (validateRegisterFields()) {
      setRegisterBtn({...registerBtn, isDisabled: false})
    } else {
      setRegisterBtn({...registerBtn, isDisabled: true})

    }
  }, [userDetails]);

  // Confirm Password Check
  const confirmPasswordCheck = (e) => {
    if (userDetails.password !== e.target.value) {
      setApiCallState({...apiCallState, isError: true, message: 'Password not matching'})
    } else {
      setApiCallState({...apiCallState, isError: false, message: ''})
    }
    setUserDetails({...userDetails, confirmPassword: e.target.value})
  }

  // Form Validator
  const validateRegisterFields = () =>
    userDetails.name.trim() &&
    EMAIL_PATTERN.test(userDetails.email.trim()) &&
    userDetails.password &&
    userDetails.password === userDetails.confirmPassword
      ? true
      : false;

  // Register User
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
            <MdPerson className="input-icon" />
            <input
              type="text"
              placeholder="Your Name"
              className="text-box"
              value={userDetails.name}
              onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
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
              onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
            />
            <div className="question-mark">
              <MdDangerous
                className={
                  !userDetails.email
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
              onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
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
              onChange={(e) => confirmPasswordCheck(e)}
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
          <button type="submit" className={registerBtn.isDisabled ? 'blue-button loading-btn btn-disabled' : 'blue-button loading-btn'} disabled={registerBtn.isDisabled}>
            {registerBtn.value} <img src={LoadingCircle} className={apiCallState.isInProgress ? 'loading-img show' : "loading-img"} alt="Loading Circle"></img>
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
