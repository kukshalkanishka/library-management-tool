import React from "react";

const Book = ({name, details, toggleAssignBookOverlay}) => {
  return (
    <div className="bookContainer">
      <div className={`todoText ${details.number ? "" : "done"}`}>{name}</div>
      <div className={`todoText ${details.number ? "" : "done"}`}>{details.number}</div>
      <button
        onClick={toggleAssignBookOverlay.bind(null, {name})}
      >Assign</button>
    </div>
  );
};

export default Book;
