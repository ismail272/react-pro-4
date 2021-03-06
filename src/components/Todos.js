import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadTodo } from '../redux/action';
import Todo from './Todo'


function Todos(props) {

    const loading = useSelector(state => state.loading);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodo())
    }, [])


    return (

        <div className="imgBlock">
            {loading ?
                <div className="load">
                     Loading...
                </div> : (
                    todos.map((todo) => {
                        return (
                            <Todo key={todo.id} todo={todo} />

                        )
                    })
                )}

        </div>
    );
}

export default Todos;