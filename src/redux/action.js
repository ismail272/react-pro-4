export const loadTodo = () => {
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=25")
        .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'addTodos',
                    payload: json
                })
            })

    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: 'users/load/start'})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'users/load/success',
                    payload: json
                })
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch({type: 'startDeleting', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}/?_limit=24`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return (dispatch) => {
        dispatch({type: 'startChecking', payload: id})
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'check',
                    payload: id
                })
            })
    }
}