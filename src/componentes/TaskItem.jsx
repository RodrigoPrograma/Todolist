import { TaskUpdate } from "./TaskUpdate";
import { FaTrash } from 'react-icons/fa';
import "../hojas de estilo/ListItem.css"
import "../hooks/UsarLIsta"

export const TaskItem = ({
    task,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) => {
    const taskId = `task-${task.id}`
    return (
        <>
            <div className="Task" id={`task-${task.id}`} draggable="true" onDragStart={(e) => e.dataTransfer.setData('text', taskId)}>
                <li className="listItem" id="Item">

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

