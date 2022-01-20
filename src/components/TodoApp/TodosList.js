import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./index";

const TodosList = () => {
  const todoContext = useContext(TodoContext);
  const { todosList, setTodosList } = todoContext;

  const removeTodo = (id) => {
    const newTodos = todosList.filter((todo) => todo.id !== id);
    setTodosList(newTodos);
  };

  const updateTodoItem = (id) => {
    const newTodos = todosList.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodosList(newTodos);
  };

  const renderEmptyBox = () => {
    return (
      <div className="no-tasks-box">
        <p>Yay! you Left with No WorkLoad</p>
      </div>
    );
  };

  return (
    <div className="flex-direction-column ">
      <p className="section-heading">TODAY'S TASKS</p>
      <ul className="todo-app-container flex-direction-column ul">
        {todosList.length === 0 && renderEmptyBox()}
        {todosList.map((todo) => (
          <TodoItem
            {...todo}
            removeTodo={removeTodo}
            key={todo.id}
            updateTodoItem={updateTodoItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
