import React from 'react';

class ToDoTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p>Thing 1</p>
                </div>
                <div className="col-12 col-sm-4">
                    <p>thing 2</p>
                </div>
                <div className="col-12 col-sm-2">
                    <button type="button" class="btn btn-primary">Book</button>
                </div>
            </div>
        )
    }
}

export default ToDoTask;