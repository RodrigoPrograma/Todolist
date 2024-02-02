import { TaskUpdate } from "./TaskUpdate";
import { FaTrash } from 'react-icons/fa';
import "../hojas de estilo/ListItem.css"

export const TaskItem = ({
  task,
  handleUpdateTask,
  handleDeleteTask,
  handleCompleteTask,
}) => {
  return (
    <>
    <div draggable="true" className="Task">
      <li classname="listItem" id="Item"  >

        <span onClick={() => handleCompleteTask(task.id)}>
          <label className={`container-done ${task.done ? 'active' : ''}`}></label>
        </span>

        <TaskUpdate task={task} handleUpdateTask={handleUpdateTask} />

      </li>
      <div className="buttonContainer">
        <button className="btn-delete"
          onClick={() => handleDeleteTask(task.id)}>
          <FaTrash />
        </button>
      </div>
      </div>
    </>
  );
}

