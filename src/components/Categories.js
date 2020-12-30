import React from 'react'
import CollectionItem from './CollectionItem'
class Categories extends React.Component {
    render() {
        return (
            <div className="categories">
                <div className="myBookmark">
                    <div className="all-bookmarks">
                        <i className="fa fa-cloud"></i>
                        <p>All bookmarks</p>
                    </div>
                    <div className="unsorted">
                        <i className="fa fa-trash"></i>
                        <p>Unsorted</p>
                    </div>
                </div>
                <div className="myCollections">
                    <div className="title-collection">
                        <p>My Collections</p>
                        <i className="fa fa-plus"></i>
                    </div>

                    <div className="content-item">
                        <CollectionItem />
                    </div>
                </div>
            </div>
        );
    }
};
export default Categories