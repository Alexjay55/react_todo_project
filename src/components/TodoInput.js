import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, editItem, handleChange, handleChangeDate, handleSubmit, handleChangeTime, time, date} = this.props;
    return (
      <div className="card card-body mt-4">
          <form onSubmit={handleSubmit}>
          <div className="input-group">
                  <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book" />
                  </div>
                  <input type="text" value={item}  
                         onChange={handleChange} 
                         placeholder="Enter a Todoitem" 
                         required
                         className="form-control text-capitalize" 
                  
                  />

                  <div className="input-group input-group-sm mb-2 mt-3 " >
                      <span className="input-group-text bg-primary text-white" id="basic-addon2">
                        <i className="fas fa-calendar" />
                      </span>
                      <input type="date"  value={date} required onChange={handleChangeDate}
                       placeholder="Enter a Todoitem"  className="form-control  text-capitalize " />
                      
                      <span className="input-group-text bg-primary text-white" id="basic-addon2">
                        <i className="fas fa-clock" />
                      </span>
                      <input type="time" value={time} required onChange={handleChangeTime}  
                      placeholder="Enter a Todoitem"  className="form-control  text-capitalize " />
                  </div>
              </div>

              <div className="list-group">
                  <button className={editItem ? "btn btn-sm btn-block btn-success my-3" : "btn btn-sm btn-block btn-primary my-3"} type="submit">
                      {editItem ? "Edit Item" : "Add Item"}
                  </button>
              </div>
          </form>
      </div>
    )
  }
}
