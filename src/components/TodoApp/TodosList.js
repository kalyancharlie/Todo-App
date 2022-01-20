import React from "react";
import TodoItem from "./TodoItem";

let sampleData = [
  {
    id: 1,
    todoText: "Setup DB",
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    todoText: "Configure DB",
    createdAt: new Date().getTime(),
  },
];

const TodosList = () => {
  const removeTodo = (id) => {
    const currentSampleData = sampleData.filter((each) => each.id !== id);
    // Set State
    sampleData = [...currentSampleData];
    console.log(sampleData);
  };

  return (
    <div className="flex-direction-column">
      <p className="section-heading">TODAY'S TASKS</p>
      <ul className="todo-app-container flex-direction-column ul">
        {sampleData.map((eachObj) => (
          <TodoItem
            details={eachObj}
            removeTodo={removeTodo}
            key={eachObj.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
