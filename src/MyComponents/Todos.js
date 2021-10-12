import React from 'react'
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
    return (
        <div>
            <h3 className="text-center my-3" >TO-DOs-LIST</h3>{/*center alignment and my-3 for space from above */}
            {props.todos.map((todo) => {
                return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
            <div class="row">
                <div class="col-sm-6">
                    <TodoItems todo={props.todos[0]}/>
                </div>
            </div>
        </div>
    )
}
