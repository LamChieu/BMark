import Header from './components/Header'
import Categories from './components/Categories'
import Comptrol from './components/CompControl'
import React from 'react'
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    bookmarks: [
    ]
  };
  componentDidMount() {
    axios.get('http://localhost:3333/bookMark/')
      .then(res => {
        this.setState({
          bookmarks: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  };

  deletebookMark = id => {
    axios.delete(`http://localhost:3333/bookMark/delete-bookmark/${id}`).then(Response => this.setState
      ({
        bookmarks: [
          ...this.state.bookmarks.filter(todo => {
            return todo._id !== id;
          })
        ]
      })
    )
  };
  addBookMark = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.url);
    this.setState({
      title: "",
      url: ""
    });
  };
  addBookMark = (title, url) => {
    const newBookMark = {
      title: title,
      url: url
    };
    axios.post('http://localhost:3333/bookMark/create-bookmark', newBookMark)
      .then(response => {
        console.log(response.data)
        this.setState({
          bookmarks: [...this.state.bookmarks, response.data]
        })
      });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-bookmark container">
          <Categories />
          <Comptrol
            bookmarks={this.state.bookmarks}
            addBookMark={this.addBookMark}
            deletebookMark={this.deletebookMark}
          />

        </div>
      </div>
    );
  }
};

export default App;
