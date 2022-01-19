import React from "react";
import LoginComponent from "../Auth/LoginComponent";
import SignupComponent from '../Auth/SignupComponent'
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, element: <LoginComponent /> },
  { path: "/login", key: "ROOT", exact: true, element: <LoginComponent /> },
  { path: "/signup", key: "ROOT", exact: true, element: <SignupComponent /> },
  
];

export default ROUTES;
