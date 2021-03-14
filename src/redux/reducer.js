const initialState = {
    todos: [],
    loading: false,
    users: [],
    usersLoading: false
}

const reducer = ((state = initialState, action) => {
    switch (action.type) {
        case 'start' :
            return {
                loading: true
            }
        case 'addTodos' :
            return {
                todos: action.payload,
            }

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

        case 'users/load/start' :
            return {
                ...state,
                usersLoading: true
            }

        case 'users/load/success' :
            return {
                ...state,
                usersLoading: false,
                users: action.payload
            }

        default: return state
    }
})

export default reducer;