import React from 'react'
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
    let myStyle={
        minHeight: "75vh",
    }
    return (
        <div className="container my-3" style={myStyle}> 
            <h3 className="text-center my-3" >TO-DOs-LIST</h3>{/*center alignment and my-3 for space from above */}
            {props.todos.length === 0 ?
                <div className="alert alert-warning" role="alert">
                    No todos to display!!!
                </div> :
                props.todos.map((todo) => {
                    return (<TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                })}
        </div>
    )
}
