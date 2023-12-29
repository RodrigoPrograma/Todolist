import './App.css';
import { TaskList } from './componentes/TaskList';
import { Taskform }from './componentes/TaskForm';
import { Usarlista } from './hooks/UsarLIsta';

function App() {

const { 
  tasks,
  taskCount,
  pendingTaskCount,
  handleNewTask,
  handleDeleteTask,
  handleCompleteTask,
  handleUpdateTask 
} = Usarlista();

  return (
    <>
    <div className="Lista-de-tareas">
      <div className="headContainer">
      <h1 className="taskHeader"> LISTA DE TAREAS </h1>
      </div>
      <div className="taskCounter">
        <div className="taskcount-container">  
        <h3>Hay {taskCount} tareas</h3>
        </div>
        <h3 className='pendingTasks'>Actualmente {pendingTaskCount} tareas estan pendientes</h3>
      </div>

      < Taskform
      handleNewTask ={handleNewTask}/>
    < TaskList
    tasks={tasks}
    handleUpdateTask={handleUpdateTask}
    handleDeleteTask={handleDeleteTask}
    handleCompleteTask={handleCompleteTask}
    
    />
    </div>

    </>
  );
  }

export default App;
