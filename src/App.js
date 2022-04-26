import "./App.css";
import { useState } from "react";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ToDo",
      items: [
        { id: Math.random(), title: "Learn JS" },
        { id: Math.random(), title: "Learn CSS" },
        { id: Math.random(), title: "Learn HTML" },
      ],
    },
    {
      id: 2,
      title: "In progress",
      items: [
        { id: Math.random(), title: "Learn History" },
        { id: Math.random(), title: "Learn Biology" },
        { id: Math.random(), title: "Learn XML" },
      ],
    },
    {
      id: 3,
      title: "In progress",
      items: [
        { id: Math.random(), title: "Learn Mathematic" },
        { id: Math.random(), title: "Learn Geology" },
        { id: Math.random(), title: "Learn Psycology" },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  let currentIndex;
  let dropIndex;

  /* ------ Drag&Drop handler functions ------ */
  function handleDragStart(evn, board, item) {
    console.log("DragStart", evn.target);

    evn.target.classList.add("dragging");
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function handleDragOver(evn) {
    evn.preventDefault();

    console.log("dragOver");
  }

  function handleDragEnd(evn) {
    console.log("DragEnd", evn.target);

    dropIndex = undefined;
    currentIndex = undefined;
    evn.target.classList.remove("dragging");
  }

  function handleDrop(evn, board, item) {
    evn.preventDefault();

    currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map((br) => {
        if (br.id === board.id) {
          return board;
        }
        if (br.id === currentBoard.id) {
          return currentBoard;
        }
        return br;
      })
    );
    console.log("drop:", evn.target);
  }

  function handleCardDrop(evn, board) {
    console.log("handleCardDrop", evn.target);
    console.log("handleCardDrop", board);

    board.items.push(currentItem);

    currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(
      boards.map((br) => {
        if (br.id === board.id) {
          return board;
        }
        if (br.id === currentBoard.id) {
          return currentBoard;
        }
        return br;
      })
    );
  }
  /* ----------------------------------------------------------------- */
  return (
    <div className="App">
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

export default App;
