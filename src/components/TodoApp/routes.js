import React from "react";
import LoginComponent from "../Auth/LoginComponent";
import SignupComponent from "../Auth/SignupComponent";
import TodoApp from "./TodoApp";

const ROUTES = [
  { path: "/", exact: true, element: <TodoApp /> },
  { path: "/login", exact: true, element: <LoginComponent />, replace: '' },
  { path: "/signup", exact: true, element: <SignupComponent /> },
];

export default ROUTES;
