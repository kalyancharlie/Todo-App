import "./styles.css";
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";
import { TodoContext } from "./index";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoApp = () => {
  const navigate = useNavigate()
  const todoContext = useContext(TodoContext)
  const {user, setUser} = todoContext

  useEffect(() => {
    
  })

  return (
    <div className="flex-all-center bg-cream w-100 h-100 outer-box">
      <div className="flex-direction-column justify-content-between todo-app-container">
        <div className="flex-direction-column">
          <Navbar />
          <TodosList />
        </div>
        <AddTodo />
      </div>
    </div>
  );
};

export default TodoApp;
