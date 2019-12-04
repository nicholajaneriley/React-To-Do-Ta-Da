import React from 'react';
import './App.css';
import Header from "./Header";
import EnterToDoTask from "./EnterToDoTask";
import TaskCount from "./TaskCount";
import ToDoTask from "./ToDoTask";

function App() {
  return (
    <div className="App">
      <Header />
      <EnterToDoTask />
      <TaskCount />
      <ToDoTask />
        
      
    </div>
  );
}

export default App;
