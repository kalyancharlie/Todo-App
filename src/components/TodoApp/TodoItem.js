import {MdOutlineDeleteForever} from 'react-icons/md'

const TodoItem = (props) => {
  const { id, todoText, isCompleted, removeTodo, updateTodoItem } = props;

  const onDelete = () => {
    removeTodo(id);
  };

  const updateTodoCompletion = () => {
    updateTodoItem(id);
  };

  return (
    <li className="flex-direction-row align-items-center li">
      <label htmlFor={id}>
        {isCompleted && (
          <div className="flex-direction-row align-items-center ">
            <input
              id={id}
              type="checkbox"
              checked
              className="check-box"
              onChange={updateTodoCompletion}
            />
            <p className="todo-text strike-through">{todoText}</p>
          </div>
        )}
        {!isCompleted && (
          <div className="flex-direction-row align-items-center ">
            <input
              id={id}
              type="checkbox"
              className="check-box"
              onChange={updateTodoCompletion}
            />
            <p className="todo-text">{todoText}</p>
          </div>
        )}
      </label>
      <MdOutlineDeleteForever className="delete-icon" onClick={onDelete} title='Delete Todo' />
    </li>
  );
};

export default TodoItem;
