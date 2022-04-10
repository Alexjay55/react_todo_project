import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        const { title, completed, handleEdit, handleChecked, handleDelete, date, time } = this.props
        return (
            <li style={{color: completed ? "blue" : "black", textDecoration: completed && "line-through"}}
                className="list-group-item text-capitalize d-flex text-align-centre justify-content-between  my-2">
                <input type="checkbox" checked={completed} onChange={handleChecked} className="my-2" />


                <h6 style={{ marginLeft: "30px" }} className="my-1"> {title} </h6>


                <div className="date my-1">
                    <h6 style={{ opacity: "0.5", fontSize: "14px",  }} > {date} </h6>
                </div>


                <div className="time my-1">
                    <h6 style={{ opacity: "0.5", fontSize: "14px",  }}> {time} </h6>
                </div>


                <div className="todo-icon my-1" >
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i style={{ cursor: "pointer" }} className="fas fa-pen" />
                    </span>

                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i style={{ cursor: "pointer" }} className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
}
