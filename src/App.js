import React, { Component } from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      items : [],
      id : 0,
      item : "",
      date : "",
      time : "",
      editItem : false,
      completed : false
    }
    this.handleChecked = this.handleChecked.bind(this)
  }
    
  handleChange = e =>{
    this.setState({
      item : e.target.value,
      
    });
  }

  handleChangeTime = e =>{
    this.setState({
      time : e.target.value,
      
    })
  }

  handleChangeDate = e =>{
    this.setState({
      date : e.target.value,
      
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    
    const newItem = {
      id : this.state.id,
      item : this.state.item,
      date : this.state.date,
      time : this.state.time,
      completed : this.state.completed
    }

    
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items : updatedItems,
      id : this.state.id +1,
      item : "",
      time : "",
      date : "",
      editItem : false,
      completed : false
    })
  }

  clearList = () => {
    this.setState({
      items : []
    })
  }

  handleDelete = (id) =>{
    const filteredItem = this.state.items.filter(item => item.id !== id);

    this.setState({
      items : filteredItem
    })
  }

  

  handleEdit = (id) =>{
    const filteredEdit = this.state.items.filter(item => item.id !== id);

    const selectedEdit = this.state.items.find(item => item.id=== id)

    this.setState({
      items : filteredEdit,
      item : selectedEdit.item,
      date : selectedEdit.date,
      time : selectedEdit.time,
      editItem : true
    })
  }

  handleChecked(id){
    this.setState(prevState =>{
      const updatedComplete = prevState.items.map(item => {
        if (item.id === id){
          item.completed = !item.completed
        };
        return item
      });
      return {
        items : updatedComplete
      }
    })
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-7 mt-4">
                  <h3 className="text-capitalize text-center">
                    todo input
                  </h3>
                  <TodoInput item={this.state.item}
                             time={this.state.time}
                             date={this.state.date} 
                             handleChange={this.handleChange}
                             handleChangeTime={this.handleChangeTime}
                             handleChangeDate={this.handleChangeDate}
                             handleSubmit={this.handleSubmit}
                             editItem={this.state.editItem}
                  />
                  <TodoList items={this.state.items}
                            completed={this.state.completed} 
                            clearList={this.clearList}
                            handleDelete={this.handleDelete} 
                            handleEdit={this.handleEdit}
                            handleChecked={this.handleChecked}
                            
                  />
              </div>
          </div>
      </div>
    )
  }
}
