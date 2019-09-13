import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';
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

  onInputChange(e){
    const inputItem = e.target.value;
    const currentItem ={
      text: inputItem,
      key: Date.now() 
    }

    this.setState({
      currentItem: currentItem
    })
  }

  addItem(e){
    const newItem = this.state.currentItem;
    if (newItem.text !=="") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
    e.preventDefault();
  }


  onInputElement = React.createRef();


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoItem 
            addItem={this.addItem}
            onInputElement={this.onInputElement}
            currentItem={this.state.currentItem}
            onInputChange={this.onInputChange}
          />
          <TodoList entries={this.state.items} deleteItem={this.deleteItem}/>
        </header>
      </div>
    );
  }
}


export default App;
