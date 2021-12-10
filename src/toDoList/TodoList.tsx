import React from "react";
import TodoListItem from './TodoListItem'

interface Props {
  todos: Todo[],
  toggleTodo: ToggleTodo
  removeTodo: RemoveTodo
}

const TodoList: React.FC<Props> = ({todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((item) => <TodoListItem todo={item} toggleTodo={toggleTodo} removeTodo={removeTodo}/>)}
    </ul>
  )
}

export default TodoList;