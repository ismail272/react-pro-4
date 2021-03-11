import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadTodo } from '../redux/action';
import Todo from './Todo'
import ReactLoading from "react-loading";


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
                    Loading<div className="Loading"><ReactLoading
                        width="20px"
                        height="20px"/></div>
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