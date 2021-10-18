import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("title or description cannot be blank!")
        }
        else {
            addTodo(title, desc);
            setDesc("");
            setTitle("");
        }
    }
    return (
        //my-3 : margin in y axis
        <div className="container my-3">
            <div>
                <p>
                    <a className="btn btn-sm btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Add a Todo
                    </a>

                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card bg-light card-body">
                        <form onSubmit={submit}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Todo Title</label>
                                    <input type="tex" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Todo Description</label>
                                    <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" rows="2"></textarea>
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
