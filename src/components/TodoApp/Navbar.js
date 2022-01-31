import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { logoutUser } from '../../api/Api'
import { logOutSession } from '../../utils/AuthUtil'
import { TODO_LOGIN, TODO_SESSION_LOGOUT } from "../../constants/constants";
import { TodoContext } from ".";

const Navbar = () => {
  const navigate = useNavigate()
  const {user, setUser}  = useContext(TodoContext)
  console.log(user, 'user name')
  // LogOut Handler
  const logoutHandler = async () => {
    const { status } = await logoutUser()
    if (!status) {
      return alert("Logout Failed. Try again Later!")
    }
    const { logoutStatus } = logOutSession(user, setUser)
    if (logoutStatus) {
      return navigate(TODO_LOGIN, {replace: true, state: {message: TODO_SESSION_LOGOUT}})
    }
    alert("Failed. Try again Later!")
  }

  return (
    <div className="flex-direction-row space-between align-items-center navbar todo-app-container">
      <h1 className="navbar-name">Hi {user.name}</h1>
      <MdLogout className="logout-icon" onClick={logoutHandler} title="Logout" />
    </div>
  );
};

export default Navbar;
