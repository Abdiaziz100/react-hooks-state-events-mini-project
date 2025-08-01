// Task.js
import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
