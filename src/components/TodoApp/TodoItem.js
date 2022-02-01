import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TodoContext } from ".";
import { updateTodo, deleteTodo } from "../../api/Api";

const TodoItem = ({ _id, todoText, isCompleted }) => {
  const { todosList, setTodosList } = useContext(TodoContext);

  // Update Todo
  const updateTodoCompletion = useCallback(async () => {
    console.log("update method", _id);
    const updateTodoStatus = await updateTodo(_id, !isCompleted);
    if (!updateTodoStatus) {
      return alert("Failed to Update. Check Internet Connection!");
    }
    const { status, message } = updateTodoStatus;
    if (!status) {
      return alert("Failed to Update. Error:", message);
    }
    console.log("Db Updated");
    const newTodos = todosList.map((todoItem) => {
      if (todoItem._id === _id) {
        return { ...todoItem, isCompleted: !todoItem.isCompleted };
      }
      return todoItem;
    });
    setTodosList(newTodos);
    console.log("local updated");
  }, [todosList]);

  // Delete Todo
  const updateTodoDeletion = useCallback(async () => {
    console.log("delete method", _id);
    const updateTodoStatus = await deleteTodo(_id);
    if (!updateTodoStatus) {
      return alert("Failed to Update. Check Internet Connection!");
    }
    const { status, message } = updateTodoStatus;
    if (!status) {
      return alert("Failed to Update. Error:", message);
    }
    console.log("Db Updated");
    const newTodos = todosList.filter((todoItem) => todoItem._id !== _id);
    setTodosList(newTodos);
    console.log("local updated");
  }, [todosList]);

  return (
    <li className="flex-direction-row align-items-center li">
      <label htmlFor={_id}>
        <div className="flex-direction-row align-items-center ">
          <input
            id={_id}
            type="checkbox"
            className="check-box"
            onChange={updateTodoCompletion}
            checked={isCompleted}
          />
          <p className={isCompleted ? "todo-text strike-through" : "todo-text"}>
            {todoText}
          </p>
        </div>
      </label>
      <MdOutlineDeleteForever
        className="delete-icon"
        onClick={updateTodoDeletion}
        title="Delete Todo"
      />
    </li>
  );
};

export default TodoItem;
