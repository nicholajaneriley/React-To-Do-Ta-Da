import React from 'react';

class ToDoTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <p>To Do 1</p>
                </div>
                <div className="col-6">
                    <div className="btn-group" role="group" aria-label="To Do List Buttons">
                        <button type="button" class="btn btn-outline-info btn-sm"><i class="fa fa-check" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-outline-info btn-sm"><i class="fa fa-times" aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-outline-info btn-sm"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoTask;