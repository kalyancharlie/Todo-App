import React, { useContext, useState, useEffect, useRef } from "react";
import { TodoContext } from "./index";
import { v4 as uuidv4 } from "uuid";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { createTodo } from "../../api/Api";

const AddTodo = () => {
  const [taskName, setTaskName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setTodosList, todosList } = useContext(TodoContext);
  const addTodoInput = useRef()

  useEffect(() => {
    setIsError(false);
  }, [taskName]);

  useEffect(() => {
    // Focus the element
    if (isAdding) {
      addTodoInput.current.focus()
    }
  }, [isAdding])

  // Validate Task Name
  const validateTaskName = () => taskName.trim();

  // Handle Add Todo
  const handleAddTodo = async () => {
    
    // Validate Todo Name
    if (!validateTaskName()) {
      return setIsError(true);
    }
    // Add new todo to todosList - Local
    const newTodo = {
      id: null,
      todoText: taskName.trim(),
      isCompleted: false,
      createdAt: new Date(),
    };
    // Call Add Todo Api
    const createTodoStatus = await createTodo(taskName, false);
    if (!createTodoStatus) {
      return alert("Failed to Create Todo. API Error");
    }
    const { status, id } = createTodoStatus;
    if (!status) {
      return alert("Server Error. Try again later!");
    }
    newTodo.id = id;
    newTodo.todoText = taskName
    setTaskName('')
    setTodosList([...todosList, newTodo]);

  };

  const plusButton = () => {
    return (
      <AiFillPlusCircle
        className="add-todo-icon"
        onClick={() => setIsAdding(!isAdding)}
      />
    );
  };

  const showInputElement = () => {
    return (
      <div className="flex-direction-column w-100p">
        <p
          id="empty-task"
          className={
            isError
              ? "c-red todo-app-container"
              : "hide c-red todo-app-container"
          }
        >
          Please Enter Task
        </p>
        <div className="flex-direction-row w-100p align-items-center justify-content-between">
          <div className="flex-direction-row input-ele-div w-100p align-items-center">
            <input
              type="text"
              placeholder="Enter the task"
              className="add-todo-input-element w-100p"
              ref={addTodoInput}
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddTodo();
                }
              }}
            />
            <div className="send-div" onClick={handleAddTodo}>
              <IoSend className="path-send svg" />
            </div>
          </div>
          <div className="send-div" onClick={() => setIsAdding(!isAdding)}>
            <ImCross className="svg" />
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
