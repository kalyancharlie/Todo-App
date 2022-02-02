import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import TodoItem from "./TodoItem";
import { TodoContext } from "./index";
import { getTodos } from "../../api/Api";

const TodosList = React.memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { todosList, setTodosList, user } = useContext(TodoContext);

  const getAllTodos = useCallback(async () => {
    try {
      const getTodosStatus = await getTodos();
      if (!getTodosStatus) {
        console.log("Failed to get Todos. Check Internet Connection");
        setTodosList([]);
        setIsLoading(false);
      }
      const { todos } = getTodosStatus;
      setTodosList(todos);
    } catch (error) {
      console.log("toodlis comp error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.accessToken) {
      getAllTodos();
    }
  }, [user]);

  useEffect(() => {
    console.log("TodoList udpated");
  }, [todosList]);

  const renderEmptyBox = () => {
    return (
      <div className="no-tasks-box">
        <p>Yay! You are left with No WorkLoad</p>
      </div>
    );
  };

  const LoadingTodosList = () => {
    return (
      <>
        <div className="flex-direction-column ">
          <p className="section-heading">TODAY'S TASKS</p>
          <ul className="todo-app-container flex-direction-column ul">
            {new Array(6).fill(0).map((ele, ind) => {
              return <LoadingTodo key={ind} />;
            })}
          </ul>
        </div>
      </>
    );
  };

  const LoadingTodo = () => {
    return (
      <div>
        <li className="flex-direction-row align-items-center li skeleton skeleton-item">
          <label>
            <div className="flex-direction-row align-items-center ">
              <input type="checkbox" className="check-box" />
              <p className="todo-text strike-through">Todo</p>
            </div>
          </label>
          <MdOutlineDeleteForever className="delete-icon" title="Delete Todo" />
        </li>
      </div>
    );
  };

  return isLoading ? (
    <LoadingTodosList />
  ) : (
    <div className="flex-direction-column ">
      <p className="section-heading">TODAY'S TASKS</p>
      <ul className="todo-app-container flex-direction-column ul">
        {todosList?.length === 0 && renderEmptyBox()}
        {todosList?.map((todo, index) => (
          <TodoItem {...todo} key={index} />
        ))}
      </ul>
    </div>
  );
});



export default TodosList;
