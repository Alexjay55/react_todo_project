import React, { Component } from 'react'
import TodoItems from './TodoItems';

export default class TodoList extends Component {
  render() {
    const {items, handleEdit,handleChecked, handleDelete, clearList} = this.props
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">
            todo list
          </h3>

          {items.map(item => {
            return <TodoItems key={item.id}
                              handleDelete={() => handleDelete(item.id)}
                              handleEdit={() => handleEdit(item.id)}
                              title={item.item}
                              date={item.date}
                              time={item.time}
                              completed={item.completed}
                              handleChecked={() =>handleChecked(item.id)} 
                              
                    />
          })}
          

          <button type="button" onClick={clearList} className="btn btn-sm btn-block btn-danger mt-5" >
            Clear List
          </button>
        </ul>
      </div>
    )
  }
}
