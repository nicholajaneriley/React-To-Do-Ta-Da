import React from 'react';
import './App.css';
import Header from "./Header";
import EnterToDoTask from "./EnterToDoTask";
import TaskCount from "./TaskCount";
import ToDoTask from "./ToDoTask";
import InspirationalMessage from "./InspirationalMessage";
import TaDaTask from "./TaDaTask";


function App() {
  return (
    <div className="App">
      <Header />
      <EnterToDoTask />
      <TaskCount />
      <ToDoTask />
      <ToDoTask />
      <ToDoTask />
      <Header />
      <InspirationalMessage />
      <TaDaTask />
      <TaDaTask />
      <TaDaTask />
        
      
    </div>
  );
}

export default App;
