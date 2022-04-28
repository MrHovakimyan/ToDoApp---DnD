import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";
import TodoBoards from "./components/TodoBoards";

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
        { id: Math.random(), title: "Learn Physics" },
      ],
    },
    {
      id: 3,
      title: "Done",
      items: [
        { id: Math.random(), title: "Learn Mathematic" },
        { id: Math.random(), title: "Learn React" },
        { id: Math.random(), title: "Learn Node" },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  let currentIndex;
  let dropIndex;

  /* ------ Drag&Drop handler functions ------ */
  function handleDragStart(evn, board, item) {
    evn.target.classList.add("dragging");
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function handleDragOver(evn) {
    evn.preventDefault();
  }

  function handleDragEnd(evn) {
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
      <div className="todoForm-title">Add new tasks !!!</div>
      <TodoForm
        onAdd={(text) => {
          boards[0].items.push({ id: Math.random(), title: text });
          setBoards([...boards]);
        }}
      />

      <TodoBoards
        boards={boards}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragEnd={handleDragEnd}
        handleDrop={handleDrop}
        handleCardDrop={handleCardDrop}
      />

      <TodoFooter
        boards={boards}
        onClearCompleted={() => {
          boards[2].items = [];
          setBoards([...boards]);
        }}
      />
    </div>
  );
}

export default App;
