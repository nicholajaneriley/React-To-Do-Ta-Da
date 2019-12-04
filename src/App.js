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
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 ta-da">
            <Header header="To Do to Ta Da!" />
            <EnterToDoTask />
            <TaskCount />
            <ToDoTask task="Task 1" />
            <ToDoTask task="Task 2" />
            <ToDoTask task="Task 3" />
          </div>
          <div className="col-12 col-sm-6 ta-da">
            <Header header="Ta Da!" />
            <InspirationalMessage />
            <TaDaTask taDaTask="Task X" />
            <TaDaTask taDaTask="Task Y" />
            <TaDaTask taDaTask="Task Z" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
