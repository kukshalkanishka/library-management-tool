import React from "react";
import AddBookPrompt from "../AddTodoPrompt/AddBookPrompt";
import BookList from "../BookList/BookList";
import AssignBookOverlay from "../AssignBookOverlay";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      isAssignBookOverlayVisible: false
    };
    this.toggleAssignBookOverlay = this.toggleAssignBookOverlay.bind(this)
  }

  async loadBooks() {
    await fetch("/todos", {method: "POST"})
    .then(res => res.json())
    .then(res => {
      this.setState({books: res.groupedBooks});
    });
  }

  async componentDidMount() {
    await this.loadBooks();
  }

  toggleAssignBookOverlay() {
    this.setState(state => ({
      isAssignBookOverlayVisible: !state.isAssignBookOverlayVisible
    }))
  }

  render() {
    const {isAssignBookOverlayVisible} = this.state;
    return (
      <div className="todoMainContainer">
        <div className="stickyHeader">
          <h3 className="homeHeader">FUN TO-DO</h3>
          <AddBookPrompt/>
        </div>
        {isAssignBookOverlayVisible ? <AssignBookOverlay/> : ""}
        <BookList books={this.state.books} toggleAssignBookOverlay={this.toggleAssignBookOverlay}/>
      </div>
    );
  }
}

export default Home;
