import { useState } from "react";
import "../App.css";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form
      className="todoForm"
      onSubmit={(evn) => {
        evn.preventDefault();
        if (text === "") {
          alert("Please insert text");
          return;
        } else {
          onAdd(text);
        }
        setText("");
      }}
    >
      <input
        className="formInput"
        type="text"
        value={text}
        onChange={(evn) => {
          setText(evn.target.value);
        }}
      />
      <button className="addBtn">Add</button>
    </form>
  );
}
export default TodoForm;
