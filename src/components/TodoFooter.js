import "../App.css";

function TodoFooter({ boards, onClearCompleted }) {
  const completedTasks = boards[2].items.length;

  return (
    <div className="todoFooter">
      <span className="itemsQuantity">
        {completedTasks} /{" "}
        {boards[0].items.length + boards[1].items.length + boards[2].items.length} Completed
      </span>
      <button className="completedBtn" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
export default TodoFooter;
