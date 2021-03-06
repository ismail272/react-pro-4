import React from 'react';
import ReactLoading from "react-loading";
import {useDispatch} from "react-redux";
import {checkTodo, deleteTodo} from "../redux/action";

function Buttons(props) {


    const dispatch = useDispatch();


    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            {props.todo.checking ?
            <ReactLoading
                type="spin"
                width="20px"
                height="20px" /> : (
                <input type="checkbox"
                       checked={props.todo.completed}
                       onChange={() => handleCheck(props.todo.id, props.todo.completed)}
                />
            )}

            {props.todo.deleting ? <div className="btn-spin">
        <ReactLoading
            type="spin"
            width="20px"
            height="20px"/>
    </div> : (
        <button onClick={() => handleDelete(props.todo.id)}
                disabled={props.todo.deleting}>✕</button>)}</>
    )
}

export default Buttons;