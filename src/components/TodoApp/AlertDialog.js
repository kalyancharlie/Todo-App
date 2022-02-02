import { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import LoadingCircle from "../../assets/LoadingCircleAnimated.svg";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { logoutUser } from "../../api/Api";
import { logOutSession } from "../../utils/AuthUtil";
import { TODO_LOGIN, TODO_SESSION_LOGOUT } from "../../constants/constants";
import { TodoContext } from ".";
import "./styles.css";

export default function AlertDialog() {
  const { user, setUser } = useContext(TodoContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [apiCallState, setApiCallState] = useState({
    isInProgress: false,
  });
  const [logoutBtn, setLogoutBtn] = useState({
    value: "Log Out",
    isDisabled: false,
  });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  // LogOut Handler
  const logoutHandler = async () => {
    try {
      setLogoutBtn({ ...logoutBtn, value: "Please Wait..", isDisabled: true });
      setApiCallState({ ...apiCallState, isInProgress: true });
      const { status } = await logoutUser();
      if (!status) {
        handleClose();
        setLogoutBtn({ ...logoutBtn, value: "Log Out", isDisabled: false });
        setApiCallState({ ...apiCallState, isInProgress: false });
        return alert("Logout Failed. Try again Later!");
      }
      const { logoutStatus } = logOutSession(user, setUser);
      if (logoutStatus) {
        return navigate(TODO_LOGIN, {
          replace: true,
          state: { message: TODO_SESSION_LOGOUT },
        });
      }
      handleClose();
      setLogoutBtn({ ...logoutBtn, value: "Log Out", isDisabled: false });
      setApiCallState({ ...apiCallState, isInProgress: false });
      alert("Failed. Try again Later!");
    } catch (error) {
      console.log("LogoutHandler Error:");
      console.log(error);
    }
  };

  return (
    <div>
      <MdLogout
        className="logout-icon"
        onClick={handleClickOpen}
        title="Logout"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="blue-outline-button loading-btn">
            Cancel
          </button>
          <button
            type="submit"
            onClick={logoutHandler}
            className={
              logoutBtn.isDisabled
                ? "blue-button loading-btn btn-disabled"
                : "blue-button loading-btn"
            }
            disabled={logoutBtn.isDisabled}
          >
            {logoutBtn.value}
            <img
              src={LoadingCircle}
              className={
                apiCallState.isInProgress ? "loading-img show" : "loading-img"
              }
              alt="Loading Circle"
            ></img>
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
