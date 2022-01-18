import React, { useState } from "react";
import Navbar from "./Navbar";
import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

// All components and routes will go here

// App Context
export const TodoContext = React.createContext([])
// App Initial State
const initialState = [{
    id: 1,
    todoText: 'Todo Text',
    isCompleted: false,
    createdAt: new Date().getTime(),
}]

const TodoApp = () => {
    const [todosList, setTodosList] = useState(initialState)
    return (
        <TodoContext.Provider value={{todosList, setTodosList}}>
            <Navbar />
            <TodosList />
            <AddTodo />
        </TodoContext.Provider>
    );
};

export default TodoApp;
