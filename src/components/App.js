import React, { Component } from 'react';
import './App.css';
import TodoItem from '../containers/TodoItem';
import TodoList from './TodoList';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items:[],
      currentItem:{
        text: "",
        key: ""
      }
    }

    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  deleteItem(key){
    const isNotId = item => item.key !== key;
    const updateItems = this.state.items.filter(isNotId);
    this.setState({
      items: updateItems
    })
  }

  onInputChange(event){
    const inputItem = event.target.value;
    const currentItem ={
      text: inputItem,
      key: Date.now() 
    }
    
    this.setState({
      currentItem,
    })
  }

  addItem(event){
    const newItem = this.state.currentItem;
    if (newItem.text !=="") {
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
    event.preventDefault();
  }





  render() {
    const { items, currentItem } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <TodoItem 
            addItem={this.addItem}
            currentItem={currentItem}
            onInputChange={this.onInputChange}
          />
          <TodoList entries={items} deleteItem={this.deleteItem}/>
        </header>
      </div>
    );
  }
}


export default App;
