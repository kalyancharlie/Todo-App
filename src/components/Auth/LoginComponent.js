import "./styles.css";
import LoginImage from '../../assets/login_image.svg'

const LoginComponent = () => {
  return (
    <div className="flex-all-center w-100 h-100 bg-cream">
      <img
        src={LoginImage}
        alt="Login SVG"
        className="login-image"
      />
      <div className="form-div">
        <form>
          <h1 className="page-heading">Log In</h1>
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
          <button className="blue-button">Log In</button>
          <p className="last-line">
            No Account? <a href="/signup">Signup Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
