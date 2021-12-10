interface Todo {
  id: number,
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type RemoveTodo = (id: number) => void;

interface AuthUser {
  username: string,
  email: string
}