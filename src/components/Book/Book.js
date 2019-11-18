import React from "react";

const Book = ({name, details, toggleTodoState, deleteTodo}) => {
  return (
    <div className="todoContainer">
      <div className={`todoText ${details.number ? "" : "done"}`}>{name}</div>
      <button
        className="markAsDone"
        onClick={deleteTodo.bind(null, {name})}
      >{`\u{1F5D1}`}</button>
    </div>
  );
};

export default Book;
