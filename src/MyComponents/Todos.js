import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
    return (
        <div>
           <h3>TO-DOs-LIST</h3>
           <TodoItems todo={props.todos[0]}/>
        </div>
    )
}
