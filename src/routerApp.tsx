import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./login";
import ToDoMain from "./toDoList";

const RouterApp: React.FC = (): JSX.Element =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<ToDoMain />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default RouterApp