import React from "react";
import { Navigate } from "react-router-dom";
import LoginComponent from "../Auth/LoginComponent";
import SignupComponent from "../Auth/SignupComponent";
import PageNotFound from "./PageNotFound";
import TodoApp from "./TodoApp";
import {
  TODO_LOGIN,
  TODO_REGISTER,
  TODO_DASHBOARD,
  TODO_404,
  TODO_ROOT_REDIRECT
} from '../../constants/constants'

const ROUTES = [
  { path: '/', exact: true, isProtected: false, element: <Navigate to={TODO_ROOT_REDIRECT} />},
  { path: TODO_LOGIN, exact: true, isProtected: false, element: <LoginComponent />},
  { path: TODO_REGISTER, exact: true, isProtected: false, element: <SignupComponent /> },
  { path: TODO_DASHBOARD, exact: true, isProtected: true, element: <TodoApp />  },
  { path: '*', element: <Navigate to={TODO_404} /> },
  { path: TODO_404, element: <PageNotFound />}
];

export default ROUTES;
