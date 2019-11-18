import React from "react";
import AddBookPrompt from "../AddTodoPrompt/AddBookPrompt";
import BookList from "../BookList/BookList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {}
    };
  }

  async loadBooks() {
    await fetch("/todos", { method: "POST" })
      .then(res => res.json())
      .then(res => {
        console.log(res, ">>>>>>>>>>>>>>>");
        this.setState({ books: res.groupedBooks });
      });
  }

  async componentDidMount() {
    await this.loadBooks();
  }

  render() {
    return (
      <div className="todoMainContainer">
        <div className="stickyHeader">
          <h3 className="homeHeader">FUN TO-DO</h3>
          <AddBookPrompt />
        </div>
        <div className="books">
          <BookList books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Home;
