import React from 'react'
class ControlSearch extends React.Component {
    render() {
        return (
            <div className="input-group" >
                <input type="text" className="form-control" placeholder="Search for..." />
                <button className="btn btn-info" type="button">Clear</button>
            </div>
        )
    }
}
export default ControlSearch