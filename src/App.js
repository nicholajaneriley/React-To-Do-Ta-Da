import React from 'react';
import uuid from "uuid/v4";
import './App.css';
import Header from "./Header";
import EnterToDoTask from "./EnterToDoTask";
import TaskCount from "./TaskCount";
import ToDoTask from "./ToDoTask";
import InspirationalMessage from "./InspirationalMessage";
import TaDaTask from "./TaDaTask";

class App extends React.Component {
  state = {
    tasks: [
      { id: uuid(), task: "Task One", date: "2019-12-15", complete: false },
      { id: uuid(), task: "Task Two", date: "2019-12-15", complete: false },
      { id: uuid(), task: "Task Three", date: "2019-12-15", complete: false },
      { id: uuid(), task: "Task X", date: "2019-12-15", complete: true },
      { id: uuid(), task: "Task Y", date: "2019-12-15", complete: true },
      { id: uuid(), task: "Task Z", date: "2019-12-15", complete: true },
    ],
  }
  render() {

    const toDoTask = this.state.tasks.filter(task => {
      return task.complete === false;
    });

    const taDaTask = this.state.tasks.filter(task => {
      return task.complete === true;
    });

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 ta-da">
              <Header header="To Do to Ta Da!" />
              <EnterToDoTask />
              <TaskCount count={toDoTask.length}/>
              {toDoTask.map(task => {
            return <ToDoTask key={task.id} task={task.task} date={task.date} />
          })}
            </div>
            <div className="col-12 col-sm-6 ta-da">
              <Header header="Ta Da!" />
              <InspirationalMessage />
              {taDaTask.map(task => {
            return <TaDaTask key={task.id} taDaTask={task.task} />
          })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  export default App;
