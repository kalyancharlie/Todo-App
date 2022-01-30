import { useEffect, useContext, useState } from "react";
import { TodoContext } from "./index";
import { useNavigate, useLocation } from "react-router-dom";
import { isTokenExpired, verifySession } from "../../utils/AuthUtil";
import { renewToken, verifyToken } from "../../api/Api";
import { TODO_LOGIN, TODO_SESSION_EXPIRED } from "../../constants/constants";

const RouteGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user, setUser } = useContext(TodoContext);
  const [isInProgress, setIsInProgress] = useState(true);

  useEffect(() => {
    // Auth Check Not Needed
    if (state?.canLogin) {
      console.log("can login");
      setIsInProgress(false);
    }
    // Verify the Session
    verifySession(user, setUser, isTokenExpired, renewToken, verifyToken)
      .then(({ status, message }) => {
        if (status) {
          setIsInProgress(false);
        } else {
          return navigate(TODO_LOGIN, { state: { message } });
        }
      })
      .catch((err) => {
        return navigate(TODO_LOGIN, {
          state: { message: TODO_SESSION_EXPIRED },
        });
      });
  }, []);

  return isInProgress ? (
    <h2 className="todo-text">Logging In . . .</h2>
  ) : (
    children
  );
};

export default RouteGuard;
