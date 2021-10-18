import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "80vh",
    }
    return (
        <>
            <div className="container my-3" style={myStyle}>
                <div className="card">

                    <div className="card-body">
                        <h3 className="card-title">To-Do's-List</h3>
                        <p className="card-text">To-Do's-List application allows you to create, add and delete a To Do. This allows you to create a list of all the tasks you need to complete. You can add multiple To Do's and manage your workload. </p>
                    </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h4> Steps to <span class="badge bg-success">add new To Do</span></h4>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Go to Home page and click on 'add a Todo'. Add title and description and click on add</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h4>Steps to <span class="badge bg-danger">Delete a Todo</span></h4>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Go to Home page and click on the delete button of the specific To Do you wish to delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
