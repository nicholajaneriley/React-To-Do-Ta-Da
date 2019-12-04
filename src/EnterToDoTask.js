import React from 'react';

class EnterToDoTask extends React.Component {
    render () {
        return (
            <form>
            <fieldset>
                <div>
                    <input type="text" placeholder="Enter your task here" />
                    <input type="submit" value="Add" />
                </div>
            </fieldset>
        </form>
        )
    }
}

export default EnterToDoTask;