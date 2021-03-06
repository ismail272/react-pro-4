const initialState = {
    todos: [],
    loading: false
}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'start' : return {loading: true};
        case 'addTodos' : return {todos: action.load}

        case 'delete' :
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }

        case 'check':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo
                })
            }

        case 'startChecking':
            return {  ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo
                })}

        case 'startDeleting' :
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            deleting: true
                        }
                    }
                    return todo
                })
            }

        default: return state
    }
})

export default reducer;