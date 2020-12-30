import React from 'react'
class ControlSort extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Name ASC</a>
                    <a className="dropdown-item" href="#">Name DESC</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Date ASC</a>
                    <a className="dropdown-item" href="#">Date DESC</a>
                </div>
                <span className="badge badge-success badge-medium">NAME - DESC</span>
            </div>
        );
    };
};
export default ControlSort;