export const loadTodo = () => {
    return (dispatch) => {
        dispatch({type: 'start'})
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=25")
        .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'addTodos',
                    load: json
                })
            })

    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
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