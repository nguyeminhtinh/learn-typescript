// use strict

import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import  { useNavigate  } from 'react-router-dom' 
// import { UserContext } from "../context/UserContext";

const initialTodos: Todo[]= [
  {id: 1, text: 'checkbox 1', complete: false},
  {id: 2,text: 'checkbox 2', complete: true},
  {id: 3,text: 'checkbox 3', complete: false},
  {id: 4,text: 'checkbox 4', complete: false},
  {id: 5,text: 'checkbox 5', complete: true},
]

const Main = () => {
  // const userContext = useContext(UserContext)
  
  const navigate = useNavigate();
  const objInfo = typeof localStorage.getItem("userInfo") === 'string' ? JSON.parse(localStorage.getItem("userInfo") || "") : '' 
  const [todos, setTodos]= useState(initialTodos)
  const [isLogout, setIsLogout] = useState(false)
  useEffect(()=>{
    if(!objInfo.username){
      navigate('/login', {replace: true})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objInfo, isLogout])
  
  
    const toggleTodo = (selectedTodo: Todo) => {
      const newTodos = todos.map((todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    };
  
    const addTodo: AddTodo = (text: string) => {
      const newTodo = {id: Math.floor(Math.random() * 1000), text, complete: false}
      setTodos([...todos, newTodo])
    }
  
    const removeTodo: RemoveTodo = (id: number) => {
      let arr = [];
      arr = todos.filter((item) => item.id !== id ) 
      setTodos(arr)
    }
    
    return (
      <div className='todoList'>
        <div className="box-info">
          {/* localStorage */}
        <p>{objInfo?.username?.toUpperCase()}</p>
        {/* context */}
        {/* <p>{userContext?.user?.username?.toUpperCase()}</p> */}
        <button type="submit" className="btn btn-primary" onClick={()=> {localStorage.clear(); setIsLogout(true)}}>Logout</button>
        </div>
        <h1>TODO LIST</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    );
}
export default Main