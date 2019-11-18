import React from "react";

const AddBookPrompt = () => {
  return (
      <form method="POST" action="/addBook" className="addTodo">
      <input
        type="text"
        name="book"
        placeholder="Add your book here"
        className="addTodoBox"
        autocomplete="off"
        required
      />
      <input type="submit" value="ADD BOOK" className="addBookButton" />
    </form>
  );
};

export default AddBookPrompt;
