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
    ],
  }
  render() {

    const toDoTask = this.state.tasks.filter(task => {
      return task.complete === false;
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
              <TaDaTask taDaTask="Task X" />
              <TaDaTask taDaTask="Task Y" />
              <TaDaTask taDaTask="Task Z" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  export default App;
