import React, {useContext} from "react";
import {TodoContext} from './index'

const AddTodo = () => {
  const todoContext = useContext(TodoContext)
  const {setTodosList} = todoContext

  const addTodo = () => {
    // Set new todo to todosList
  }

  return (
    <div className="flex-direction-row justify-content-end todo-app-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="add-todo-icon"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    </div>
  );
};

export default AddTodo;
