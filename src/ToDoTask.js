import React from 'react';
import './ToDoTask.css';

class ToDoTask extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    changeComplete = () => {
        this.props.changeCompleteFunc(this.props.id);
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <p className="tooltipone">{this.props.task} <span className="tooltiptext">{this.props.date}</span></p>

                </div>
                <div className="col-6">
                    <div className="btn-group" role="group" aria-label="To Do List Buttons">
                        <button onClick={this.changeComplete} type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-check" aria-hidden="true"></i></button>
                        <button onClick={this.handleDelete} type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoTask;