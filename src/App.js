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

  addTask = (task, date) => {
    console.log(task, date);
    const newTask = {
      id: uuid(),
      task: task,
      date: date,
      complete: false,
    };

    //copy the array of tasks from state using slice
    const copy = this.state.tasks.slice();
    //push that object into the array of tasks
    copy.push(newTask);
    //make sure state is updated
    this.setState({
      tasks: copy
    });
  }

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(keepTask => {
      console.log(keepTask.id);
      return keepTask.id !== id;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  };

  changeComplete = (id) => {
    const filteredTasks = this.state.tasks.map(completeTask => {
      console.log(completeTask.id);
      if (completeTask.id === id) {
        completeTask.complete = true;
      }
      return completeTask;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  };


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
            <EnterToDoTask addNewTaskFunc={this.addTask} />
            <TaskCount count={toDoTask.length} />
            {toDoTask.map(task => {
              return <ToDoTask
                changeCompleteFunc={this.changeComplete}
                deleteTaskFunc={this.deleteTask}
                key={task.id} task={task.task} date={task.date} id={task.id} />
            })}
          </div>
          <div className="col-12 col-sm-6 ta-da">
            <Header header="Ta Da!" />
            <InspirationalMessage />
            {taDaTask.map(task => {
              return <TaDaTask
                deleteTaskFunc={this.deleteTask}
                key={task.id} taDaTask={task.task} id={task.id}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
