import './App.css';
import { TaskList } from './componentes/TaskList';
import { Taskform } from './componentes/TaskForm';
import { Usarlista } from './hooks/UsarLIsta';
import DragAndDrop from './componentes/DragAndDrop';

function App() {
    const {
        tasks,
        taskCount,
        pendingTaskCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask } = Usarlista();

    return (
        <>
            <div className='Lista-de-tareas'>
                <div className='headContainer'>
                    <h1 className='taskHeader'> Trioptinum </h1>
                </div>
                <div className='taskCounter'>
                    <div className='taskcount-container'>
                        <h3>Hay {taskCount} tareas</h3>
                    </div>
                    <h3 className='pendingTasks'>Actualmente {pendingTaskCount} tareas estan pendientes</h3>
                </div>
                < Taskform
                    handleNewTask={handleNewTask} />
                < TaskList
                    tasks={tasks}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask} />
            </div>
            <div className='dashboard-container'>
                <ul className='dashboard'>
                <input type='text' className='groupName' placeholder='Nombre de grupo'/>
                    <li className='list-container'></li>
                    
                </ul>
            </div>
            <div className='dashboard-container'>
                <ul className='dashboard'>
                    <li className='list-container-example'><button>+</button></li>
                </ul>
            </div>
        </>
    );
}

DragAndDrop();
export default App;
