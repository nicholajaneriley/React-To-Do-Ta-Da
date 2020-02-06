import React from 'react';
import {reactDate} from './Date.js';

class EnterToDoTask extends React.Component {
    state = {
        task: "",
        date: reactDate(new Date()),
    };

    updateTask = (event) => {
        this.setState({
            task: event.target.value
        });
    };

    updateDate = event => {
        this.setState({
            date: event.target.value
        });
    }

    addTask = () => {
        //maybe don't let someone submit if there are empty string in task
        this.props.addNewTaskFunc(
            this.state.task,
            this.state.date
        );

        this.setState({
            task: "",
            date: reactDate(new Date()),
        })
    };


    render() {
        return (
            <form>
                <fieldset>
                    <div>
                        <input
                            type="text"
                            onChange={this.updateTask}
                            value={this.state.task}
                            placeholder="Enter your task here"
                        />
                        <input
                            type="date"
                            name="task-date"
                            value={this.state.date}
                            onChange={this.updateDate}
                        />
                        <button 
                        type="button" 
                        className="btn btn-outline-info btn-sm left-space"
                        onClick={this.addTask}
                        >
                        Add
                        </button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default EnterToDoTask;