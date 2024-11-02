import { useState } from "react";
import ToDoListItem from "./ToDoListItems";
import "./style.css";

function ToDoList() {
  const [taskText, setTaskText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  function handleEditTask(index) {
    const updatedTasks = prompt("edit your task", toDoList[index]);
    if (updatedTasks !== null && updatedTasks.trim() !== "") {
      const updatedList = [...toDoList];
      updatedList[index] = updatedTasks;
      setToDoList(updatedList);
    }
  }

  function handleDelete(index) {
    const newList = [...toDoList];
    const newCompletedList = [...completedTask];
    newList.splice(index, 1);
    newCompletedList.splice(index, 1);
    setToDoList(newList);
    setCompletedTask(newCompletedList);
  }

  function handleCheckBox(index) {
    const newCompleteList = [...completedTask];
    newCompleteList[index] = !newCompleteList[index];
    setCompletedTask([...newCompleteList]);
  }

  function handleClick() {
    if (taskText.trim() !== "") {
      setToDoList([...toDoList, taskText]);
      setTaskText("");
      setCompletedTask([...completedTask, false]);
      console.log(toDoList);
    }
  }
  return (
    <>
      <div className="toDoBox">
        <h1 className="heading">To Do List</h1>
        <div className="toDoList">
          <ToDoListItem
            data={toDoList}
            handleCheckBox={handleCheckBox}
            completedTask={completedTask}
            handleDelete={handleDelete}
            handleEditTask={handleEditTask}
          />
        </div>
        <div className="addTaskBox">
          <input
            type="text"
            placeholder="Add Task"
            value={taskText}
            className="taskInput"
            onChange={(e) => setTaskText(e.target.value)}
          ></input>
          <button className="addBtn" onClick={handleClick}>
            + New task
          </button>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
