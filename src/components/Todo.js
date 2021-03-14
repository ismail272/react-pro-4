import React from 'react';
import Buttons from "./Buttons";

function Todo(props) {

    const user = props.users.filter(item => item.id === props.todo.userId)

    return (
           <div className="Card">
               <div className="Check-Delete">
               <Buttons  todo={props.todo} />
            </div>
            <div className="imgCard">
                <img src={props.todo.thumbnailUrl}  alt="img"/>
            </div>
               <div className="title">{props.todo.title}</div>
               <div>{user[0].email}</div>

           </div>


    );
}

export default Todo;