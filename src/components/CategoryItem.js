import React from 'react'
import moment from "moment";
class CategoryItem extends React.Component {
    render() {
        const { _id, title, description, url, folder, createAt }  = this.props.bookmark
        return (
            <div className="category-item">
                <div className="item-img">
                </div>
                <div className="item-content">
                    <p className="title">{title}</p> <br />
                    <p className="description">{description} </p> <br />
                    <p className="folder">{folder}</p>
                    <p className="url">{url} </p> <br />
                    <p className="time">{moment(createAt).format("DD/MM/YYYY")}</p>
                </div>
                <div className="control">
                <i className="fa fa-trash"onClick={() => this.props.deletebookMark(_id)}></i>
                </div>
                
            </div>
        );
    }
}
export default CategoryItem