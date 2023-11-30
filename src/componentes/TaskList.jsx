import React from "react";
import { TaskItem } from "./TaskItem";


export const TaskList = ({
tasks,
handleUpdateTask,
handleDeleteTask,
handleCompleteTask
}) => {
  return (
    <div className="contenedor">
      
      <ul className="list">
        {tasks.map(task => 
       <TaskItem
       key={task.id}
       task={task}
       handleUpdateTask={handleUpdateTask}
       handleDeleteTask={handleDeleteTask}
       handleCompleteTask={handleCompleteTask} 
       />
        )}
      </ul>
      
    </div>
  );
};

