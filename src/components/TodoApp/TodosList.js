import React from "react";
import TodoItem from "./TodoItem";

const sampleData = [
  {
    id: 1,
    todoText: "Setup DB",
    isCompleted: true,
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    todoText: "Configure DB",
    isCompleted: false,
    createdAt: new Date().getTime(),
  },
];

const TodosList = () => {
  return (
    <div className="flex-direction-column">
      <p className="section-heading">TODAY'S TASKS</p>
      <ul className="todo-app-container flex-direction-column ul">
        {sampleData.map((eachObj) => (
          <TodoItem details={eachObj} key={eachObj.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
