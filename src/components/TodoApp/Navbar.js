import { useContext } from "react";
import { TodoContext } from ".";
import AlertDialog from "./AlertDialog";

const Navbar = () => {
  const { user } = useContext(TodoContext);

  return (
    <div className="flex-direction-row space-between align-items-center navbar todo-app-container">
      <h1 className="navbar-name">Hi {user.name}</h1>
      <AlertDialog />
    </div>
  );
};

export default Navbar;
