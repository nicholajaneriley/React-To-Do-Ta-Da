import React from 'react';
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
      { id: 1, task: "Task One", date: "2019-12-15", complete: false },
      { id: 2, task: "Task Two", date: "2019-12-15", complete: false },
      { id: 3, task: "Task Three", date: "2019-12-15", complete: false },
      { id: 4, task: "Task X", date: "2019-12-15", complete: true },
      { id: 5, task: "Task Y", date: "2019-12-15", complete: true },
      { id: 6, task: "Task Z", date: "2019-12-15", complete: true },
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
              <TaskCount />
              {toDoTask.map(task => {
            return <ToDoTask key={task.id} task={task.task} />
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
