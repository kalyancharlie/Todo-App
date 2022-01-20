import "./styles.css";
import SignUpImage from '../../assets/signup_image.svg'

const SignupComponent = () => {
  return (
    <div className="flex-all-center w-100 h-100 bg-cream">
      <img
        src={SignUpImage}
        alt="Signup SVG"
        className="login-image signup-img"
      />
      <div className="form-div signup-form">
        <form>
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
            <input type="text" placeholder="Your Name" className="text-box" />
          </div>
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
            <input type="text" placeholder="Your Email" className="text-box" />
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
            <input type="text" placeholder="Password" className="text-box" />
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
              type="text"
              placeholder="Repeat your password"
              className="text-box"
            />
          </div>
          <button className="blue-button">Register</button>
          <p className="last-line">
            Already a Member? <a href="/login">Login Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
