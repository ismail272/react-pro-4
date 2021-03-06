import React from 'react';
import Buttons from "./Buttons";

function Todo(props) {


    return (
           <div className="Card">
               <div className="Check-Delete">
               <Buttons  todo={props.todo} />
            </div>
            <div className="imgCard">
                <img src={props.todo.thumbnailUrl}  alt="img"/>
            </div>
               <div className="title">{props.todo.title}</div>
           </div>


    );
}

export default Todo;