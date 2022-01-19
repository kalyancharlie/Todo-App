import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "../Auth/LoginComponent";
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

// All components and routes will go here

// App Context
export const TodoContext = React.createContext([]);
// App Initial State
const initialState = [
  {
    id: 1,
    todoText: "Todo Text",
    isCompleted: false,
    createdAt: new Date().getTime(),
  },
];

const TodoApp = () => {
  const [todosList, setTodosList] = useState(initialState);
  return <LoginComponent />;
};

export default TodoApp;
