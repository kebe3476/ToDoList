import React, { useState } from "react";
import './App.css';
//Import components
import Form from './components/Form';
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  
  return (
    <div className="container">
      <div className="heading">
        <h1>Keith To Do List</h1>
      </div>   
        <Form 
          inputText = {inputText}
          todos = {todos} 
          setToDos = {setToDos} 
          setInputText = {setInputText}
          />
        <ToDoList todos = {todos} />
    </div>
  );
}

export default App;
