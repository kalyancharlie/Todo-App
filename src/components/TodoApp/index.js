import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import useLocalStorage from '../../hooks/useLocalStorage'
import {LOCAL_STR_USER, LOCAL_STR_TODOS} from '../../constants/constants'
import RouteGuard from "./RouteGuard";

// All components and routes will go here

// App Context
export const TodoContext = React.createContext([]);
// App Initial State
const initialState = [
  {
    id: 1,
    todoText: "Setup DB",
    isCompleted: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    todoText: "Configure DB",
    isCompleted: false,
    createdAt: new Date(),
  },
];

const initialUserState = {
  name: '',
  email: '',
  user_id: '',
  isAuthenticated: false,
  isLoggedIn: false,
  accessToken: ''
}

const TodoApp = () => {
  const [todosList, setTodosList] = useState(initialState);
  const [user, setUser] = useLocalStorage(LOCAL_STR_USER, initialUserState)
  return (
    <TodoContext.Provider value={{ todosList, setTodosList, user, setUser }}>
      <Router>
        <Routes>
          {routes.map((route, ind) => {
            const {isProtected, element} = route
            if (isProtected) {
              return <Route {...route} element={<RouteGuard>{element}</RouteGuard>} key={ind} />
            }
            return <Route {...route} key={ind} />;
          })}
        </Routes>
      </Router>
    </TodoContext.Provider>
  );
};

export default TodoApp;
