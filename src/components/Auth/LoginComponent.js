import "./styles.css";
import LoginImage from "../../assets/login_image.svg";

const LoginComponent = () => {
  const runValidation = (event) => {
    event.preventDefault();
    const enteredEmail = document.getElementById("loginEmailEl").value;
    const enteredPassword = document.getElementById("loginPasswordEl").value;

    if (enteredEmail === "") {
      document.getElementById("loginEmailErrorMsg").classList.remove("hide");
    } else if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(enteredEmail)) {
      document.getElementById("loginEmailErrorMsg").classList.add("hide");
    } else {
      document.getElementById("loginEmailErrorMsg").classList.remove("hide");
    }

    if (enteredPassword === "") {
      document.getElementById("loginPasswordErrorMsg").classList.remove("hide");
    } else {
      document.getElementById("loginPasswordErrorMsg").classList.add("hide");
    }
  };

  return (
    <div className="flex-all-center align-items-center w-100 h-100 bg-cream">
      <img src={LoginImage} alt="Login SVG" className="login-image" />
      <div className="form-div">
        <form onSubmit={runValidation}>
          <h1 className="page-heading">Log In</h1>
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
              id="loginEmailEl"
              placeholder="Your Email"
              className="text-box"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="loginEmailErrorMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill hide c-red input-icon"
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
              id="loginPasswordEl"
              className="text-box"
            />
            <div className="question-mark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="loginPasswordErrorMsg"
                fill="currentColor"
                className="bi bi-exclamation-circle-fill c-red hide input-icon"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="c-red todo-app-container mb-10" id="loginPageErrMsg">
            Show if Any Error
          </p>
          <button type="submit" className="blue-button">
            Log In
          </button>
          <p className="last-line">
            No Account? <a href="/signup">Signup Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
