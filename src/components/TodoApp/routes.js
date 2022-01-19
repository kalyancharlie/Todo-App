import React from "react";
import LoginComponent from "../Auth/LoginComponent";
import SignupComponent from "../Auth/SignupComponent";
import TodoApp from "./TodoApp";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, element: <TodoApp /> },
  { path: "/login", key: "ROOT", exact: true, element: <LoginComponent /> },
  { path: "/signup", key: "ROOT", exact: true, element: <SignupComponent /> },
];

export default ROUTES;
