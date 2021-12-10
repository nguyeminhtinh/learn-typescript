import React from "react";

interface Props {
  todo: Todo,
  toggleTodo: ToggleTodo
  removeTodo: RemoveTodo
}

const TodoListItem: React.FC<Props> = ({todo, toggleTodo, removeTodo }) => {
  return (
    <li className="list-item">
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input className="form-check-input" type="checkbox" checked={todo.complete} onClick={()=> toggleTodo(todo)} /> {todo.text}
      </label>
      <p onClick={()=> removeTodo(todo.id)} className="remove-item">x</p>
    </li>
  )
}

export default TodoListItem;