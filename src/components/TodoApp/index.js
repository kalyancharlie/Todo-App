import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

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

const TodoApp = () => {
  const [todosList, setTodosList] = useState(initialState);
  return (
    <TodoContext.Provider value={{ todosList, setTodosList }}>
      <Router>
        <Routes>
          {routes.map((route) => {
            return <Route {...route} />;
          })}
        </Routes>
      </Router>
    </TodoContext.Provider>
  );
};

export default TodoApp;
