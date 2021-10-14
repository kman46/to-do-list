import React from 'react'
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
    return (
        <div>
            <h3 className="text-center my-3" >TO-DOs-LIST</h3>{/*center alignment and my-3 for space from above */}
            {props.todos.length === 0 ?
                <div class="alert alert-warning" role="alert">
                    No todos to display!!!
                </div> :
                props.todos.map((todo) => {
                    return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}
        </div>
    )
}
