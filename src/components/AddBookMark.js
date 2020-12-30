import React from 'react'
class AddBookMark extends React.Component {
    state = {
        title: "",
        url: ""
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    handleUrlChange = (e) => {
        this.setState({
            url: e.target.value
        });
    };
    addBookMark = (e) => {
        e.preventDefault();
        this.props.addBookMark(this.state.title, this.state.url);
        this.setState({
            title: "",
            url: ""
            });            
        };
        
    render() {
        return (
            <div>
                <form className="form-container" onSubmit={this.addBookMark}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input-text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <input
                        type="text"
                        placeholder="Url"
                        className="input-text"
                        value={this.state.url}
                        onChange={this.handleUrlChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="input-submit" />
                </form>

            </div>

        )
    }
};
export default AddBookMark