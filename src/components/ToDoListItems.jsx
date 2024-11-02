import "./style.css";
function ToDoListItem({
  data,
  handleCheckBox,
  completedTask,
  handleDelete,
  handleEditTask,
}) {
  return (
    <>
      {data.map((task, index) => (
        <div key={index} className="task">
          <input
            type="checkbox"
            onChange={() => handleCheckBox(index)}
            checked={completedTask[index]}
            className="checkBox"
          ></input>
          <h2
            style={{
              textDecoration: completedTask[index] ? "line-through" : "none",
            }}
          >
            {index + 1}. {task}
          </h2>
          <div>
            <button onClick={() => handleEditTask(index)}>🖊️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoListItem;
