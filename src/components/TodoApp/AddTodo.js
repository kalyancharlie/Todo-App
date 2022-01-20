import React, { useContext, useState } from "react";
import { TodoContext } from "./index";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [isAdding, setIsAdding] = useState(false);
  const todoContext = useContext(TodoContext);
  const { setTodosList, todosList } = todoContext;

  const addTodo = (newTodo) => {
    // Set new todo to todosList
    const newTodosList = [...todosList, newTodo];
    setTodosList(newTodosList);
  };

  const onSend = () => {
    const taskName = document.getElementById("add-todo-input").value;
    if (taskName === "") {
      document.getElementById("empty-task").classList.remove("hide");
    } else {
      document.getElementById("empty-task").classList.add("hide");
      document.getElementById("add-todo-input").value = "";
      const newTodo = {
        id: uuidv4(),
        todoText: taskName,
        isCompleted: false,
        createdAt: new Date(),
      };
      addTodo(newTodo);
    }
  };

  const alterIsAdding = () => {
    setIsAdding(!isAdding);
  };

  const onEnterInput = (event) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  const plusButton = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="add-todo-icon"
        onClick={alterIsAdding}
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    );
  };

  const showInputElement = () => {
    return (
      <div className="flex-direction-column w-100p">
        <p id="empty-task" className="hide c-red todo-app-container">
          Please Enter Task Name
        </p>
        <div className="flex-direction-row w-100p align-items-center justify-content-between">
          <div className="flex-direction-row input-ele-div w-100p align-items-center">
            <input
              type="text"
              placeholder="Enter the task"
              className="add-todo-input-element w-100p"
              id="add-todo-input"
              onKeyDown={onEnterInput}
            />
            <div className="send-div" onClick={onSend}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                  className="path-send"
                />
              </svg>
            </div>
          </div>
          <div className="send-div" onClick={alterIsAdding}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                className="path-send"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                className="path-send"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-direction-row justify-content-end add-todo-box  todo-app-container">
      {!isAdding && plusButton()}
      {isAdding && showInputElement()}
    </div>
  );
};

export default AddTodo;
