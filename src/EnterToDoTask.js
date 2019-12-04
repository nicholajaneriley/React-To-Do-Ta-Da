import React from 'react';

class EnterToDoTask extends React.Component {
    render () {
        return (
            <form>
            <fieldset>
                <div>
                    <input type="text" placeholder="Enter your task here" />
                    <button type="button" className="btn btn-outline-info btn-sm left-space">Add</button>
                </div>
            </fieldset>
        </form>
        )
    }
}

export default EnterToDoTask;