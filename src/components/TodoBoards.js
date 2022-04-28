import "../App.css";
import { useState } from "react";

function TodoBoards({
  boards,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  handleDrop,
  handleCardDrop,
}) {
  return (
    <div className="boardsWrpr">
      {boards.map((board) => (
        <div
          className="board"
          key={board.id}
          onDragOver={(evn) => handleDragOver(evn)}
          onDrop={(evn) => handleCardDrop(evn, board)}
        >
          <div className="board-title">{board.title}</div>
          {board.items.map((item) => (
            <div
              key={item.id}
              className="item"
              draggable="true"
              onDragStart={(evn) => handleDragStart(evn, board, item)}
              onDragOver={(evn) => handleDragOver(evn)}
              onDragEnd={(evn) => handleDragEnd(evn)}
              onDrop={(evn) => handleDrop(evn, board, item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default TodoBoards;
