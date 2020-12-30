import React from 'react';
import CategoryItem from './CategoryItem'
class CategoryList extends React.Component {
    render() {
        return (
            <div className="category__bottom">
                <h4>My Collections</h4>
                <div className="category-list">
                    {this.props.bookmarks.map(bookmark => (
                        <CategoryItem key={bookmark._id} bookmark={bookmark} 
                        deletebookMark = {this.props.deletebookMark}
                        />
                        
                    ))}

                </div>
            </div>
        );
    }
};
export default CategoryList