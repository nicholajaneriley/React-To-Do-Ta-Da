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
      <Header header="To Do to Ta Da!"/>
      <EnterToDoTask />
      <TaskCount />
      <ToDoTask task="Task 1"/>
      <ToDoTask task="Task 2"/>
      <ToDoTask task="Task 3" />
      <Header header="Ta Da!"/>
      <InspirationalMessage />
      <TaDaTask taDaTask="Task X"/>
      <TaDaTask taDaTask="Task Y"/>
      <TaDaTask taDaTask="Task Z"/>
        
      
    </div>
  );
}

export default App;
