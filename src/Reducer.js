


export const ListReducer = (initialState, action) => {

    switch (action.type) {
        case "Add Task":
            return [...initialState, action.payload]
        
            case "Delete Task":
            return initialState.filter(task => task.id !== action.payload)
        
            case "Complete List":
            return initialState.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done,
                    };

                }
                return task;
            })
        case "Update List":
            return initialState.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        description: action.payload.description,
                    };

                }
                return task;
            })
        
        default:
            return initialState
    }
}