import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ToDo",
      items: [
        { id: 1, title: "Learn JS" },
        { id: 2, title: "Learn CSS" },
        { id: 3, title: "Learn HTML" },
      ],
    },
    {
      id: 2,
      title: "In progress",
      items: [
        { id: 4, title: "Learn History" },
        { id: 5, title: "Learn Biology" },
        { id: 6, title: "Learn XML" },
      ],
    },
    {
      id: 3,
      title: "In progress",
      items: [
        { id: 7, title: "Learn Mathematic" },
        { id: 8, title: "Learn Geology" },
        { id: 9, title: "Learn Psycology" },
      ],
    },
  ]);
  return (
    <div className="App">
      {boards.map((board) => (
        <div className="board">
          <div className="board-title">{board.title}</div>
          {board.items.map((item) => (
            <div className="item">{item.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
