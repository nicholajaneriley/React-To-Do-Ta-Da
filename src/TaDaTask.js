import React from 'react';

class TaDaTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-5">
                    <p>{this.props.taDaTask}</p>
                </div>
                <div className="col-3">
                    <div className="btn-group" role="group" aria-label="Ta Da List Emoticon Buttons">
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-smile-o"
                            aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-meh-o"
                            aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-frown-o"
                            aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="col-4">
                    <div className="btn-group" role="group" aria-label="Ta Da List Buttons">
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-check" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaDaTask;