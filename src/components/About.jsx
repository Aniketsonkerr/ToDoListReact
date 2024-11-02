import "./style.css";
function About() {
  return (
    <>
      <div className="aboutBox">
        <h1>About</h1>
        <ul className="aboutList">
          <li>
            <p>
              Add a Task: Type a task into the input box and click the "+"
              button to add it to your list.
            </p>
          </li>
          <li>
            <p>
              Mark as Completed: Check the box next to a task to mark it as
              completed, which will strike through the text.
            </p>
          </li>
          <li>
            <p>
              Edit a Task: Click the "Edit" button next to a task to modify its
              text; you’ll be prompted to enter the updated task.
            </p>
          </li>
          <li>
            <p>
              Delete a Task: Click the "Delete" button next to a task to remove
              it from the list.
            </p>
          </li>
          <li>
            <p>
              Clear Input: After adding a task, the input field will clear
              automatically, so you’re ready to add the next one.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default About;
