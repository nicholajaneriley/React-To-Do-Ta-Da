import React from 'react';
import axios from "axios";
import './App.css';
import Header from "./Header";
import EnterToDoTask from "./EnterToDoTask";
import TaskCount from "./TaskCount";
import ToDoTask from "./ToDoTask";
import InspirationalMessage from "./InspirationalMessage";
import TaDaTask from "./TaDaTask";
import {reactDate} from './Date.js';

class App extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get("https://v3kl6yt9zd.execute-api.eu-west-1.amazonaws.com/dev/todotada")
      .then((response) => {
       // const tasks = response.data.task;
      //  

        const tasks = response.data.task.map(task => {
          task.date = reactDate(new Date(task.date));
          return task;
        });
        console.log(tasks);

        this.setState({
          tasks: tasks
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addTask = (task, date) => {
    console.log(task, date);
    const newTask = {
      task: task,
      date: date,
      completed: false,
      emotion: null
    };

    axios.post("https://v3kl6yt9zd.execute-api.eu-west-1.amazonaws.com/dev/todotada", newTask)
      .then((response) => {
        const newTask = response.data;
        const copy = this.state.tasks.slice();
        // turns boolean sql value from 1 to true or can map the get data in the backend instead 
        // newDev.available = newDev.available === true ? 1 : 0;
       // newTask.date = new Date(newTask.date).toISOString();
        copy.push(newTask);
        console.log(copy);
        this.setState({
          tasks: copy
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteTask = id => {
    axios.delete(`https://v3kl6yt9zd.execute-api.eu-west-1.amazonaws.com/dev/todotada/${id}`)
      .then(() => {
        const filteredTasks = this.state.tasks.filter(keepTask => {
          if (keepTask.id !== id) return true;
          else return false;
        });

        this.setState({
          tasks: filteredTasks
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeComplete = id => {
    axios.put(`https://v3kl6yt9zd.execute-api.eu-west-1.amazonaws.com/dev/todotada/${id}`, {
      completed: true
    })
      .then(() => {
        const filteredTasks = this.state.tasks.map(completeTask => {
          if (completeTask.id === id) {
            completeTask.completed = !completeTask.completed;
          }
          return completeTask;
        });

        this.setState({
          tasks: filteredTasks
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  /*updateEmotion = (id, emotion) => {
    const filteredTasks = this.state.tasks.map(completeTask => {
      console.log(completeTask.id);
      if (completeTask.id === id) {
        completeTask.emotion = emotion;
      }
      return completeTask;
    });
    console.log(filteredTasks);
    this.setState({
      tasks: filteredTasks
    });
  }; */


  render() {

    const toDoTask = this.state.tasks.filter(task => {
      return task.completed === false;
    });

    const taDaTask = this.state.tasks.filter(task => {
      return task.completed === true;
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
                  promoteTaskFunc={this.promoteTask}
                  key={task.id} task={task.task} date={task.date} id={task.id} />
              })}
            </div>
            <div className="col-12 col-sm-6 ta-da">
              <Header header="Ta Da!" />
              <InspirationalMessage />
              {taDaTask.map(task => {
                return <TaDaTask
                  changeCompleteFunc={this.changeComplete}
                  deleteTaskFunc={this.deleteTask}
                  updateEmotionFunc={this.updateEmotion}
                  key={task.id} taDaTask={task.task} id={task.id} rating={task.rating} emotion={task.emotion} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
