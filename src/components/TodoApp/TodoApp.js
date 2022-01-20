import "./styles.css";
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
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
