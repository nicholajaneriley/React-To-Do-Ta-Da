import React from 'react';
import './App.css';
import Header from "./Header";
import TaskCount from "./TaskCount";
import ToDoTask from "./ToDoTask";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskCount />
      <ToDoTask />
        
      
    </div>
  );
}

export default App;
