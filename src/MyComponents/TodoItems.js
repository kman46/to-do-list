import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
    return (
        <div className="card">
            <h4 className="card-title">{todo.title}</h4>
            <p className="card-text">{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
    )
}
