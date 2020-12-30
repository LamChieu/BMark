import React from 'react'
import ControlSort from './ControlSort'
import ControlSearch from './ControlSearch'
import CategoryList from './CategoryList'
import AddBookMark from './AddBookMark'
class CompForm extends React.Component {
    render() {
        return (
            <div className="category__content">
                <div className="category__top">
                    <div className="form-group">
                        < ControlSort />
                        <div className="add">
                            <i className="fa fa-star"></i>
                            <p>Add</p>
                        </div>
                    </div>
                    <AddBookMark 
                    
                    addBookMark = {this.props.addBookMark}/>
                </div>
                <ControlSearch />
                <CategoryList 
                    bookmarks={this.props.bookmarks}
                    deletebookMark = {this.props.deletebookMark}
                />
            </div>
        );
    }
};
export default CompForm