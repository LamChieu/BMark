import React from 'react';
class CollectionItem extends React.Component {
    render() {
        return (
            <div className="collections__item">
                <i className="fa fa-folder"></i>
                <p className = "collection">Bookmark</p>
            </div>
        );
    }
};
export default CollectionItem