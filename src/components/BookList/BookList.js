import React from "react";
import Book from "../Book/Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: props.books };
    this.toggleTodoState = this.toggleTodoState.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async toggleTodoState(body) {
    await fetch("/toggleTodoState", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  }

  async deleteTodo(body) {
    await fetch("/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ books: res });
      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      books: newProps.books
    });
  }

  render() {
    const {books} = this.state;
    return (
      <div>
        {Object.keys(books).reverse().map(bookName => {
          return (
            <Book
              key={books[bookName].id}
              details={books[bookName]}
              name={bookName}
              toggleTodoState={this.toggleTodoState}
              deleteTodo={this.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default BookList;
