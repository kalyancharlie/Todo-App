import "./styles.css";
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  return (
    <div className="flex-all-center bg-cream w-100">
      <div className="flex-direction-column todo-app-container">
        <Navbar />
        <TodosList />
        <AddTodo />
      </div>
    </div>
  );
};

export default TodoApp;
