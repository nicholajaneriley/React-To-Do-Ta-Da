import React from 'react';

class ToDoTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-6">
                    <div className="btn-group" role="group" aria-label="To Do List Buttons">
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-check" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoTask;