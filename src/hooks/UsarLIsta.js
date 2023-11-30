import { useEffect, useReducer } from "react"
import { ListReducer } from "../Reducer"

export const Usarlista = () => {
    const InitialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem("tasks")) || []
    };

    const [tasks, dispatch] = useReducer(ListReducer, InitialState, init);

    const taskCount = tasks.length
    const pendingTaskCount = tasks.filter(task => !task.done).length

    useEffect(() =>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const handleNewTask = task => {
        
        const action = {
            type: "Add Task",
            payload: task,
        };
        dispatch(action);
    };
    const handleDeleteTask = id => {
        const action = {
            type: "Delete Task",
            payload: id,
        };
        dispatch(action)
    };

    const handleCompleteTask = id => {
        const action = {
            type: "Complete List",
            payload: id,
        };
        dispatch(action)
    };

    const handleUpdateTask = (id, description) => {
        const action = {
            type: "Update list",
            payload: {
                id,
                description,
            }
        };
        dispatch(action)
    };
    return {
        tasks,
        taskCount,
        pendingTaskCount,
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
};
