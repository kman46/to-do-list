import React from 'react'

export const TodoItems = ({todo, onDelete}) => {
    let itemstyles={
        width: "40%"
    }
    return (
        <>
        <div className="card" style={itemstyles}>
            <h4 className="card-title">{todo.title}</h4>
            <p className="card-text">{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
