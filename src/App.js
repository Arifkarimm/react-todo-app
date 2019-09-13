import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items:[],
      currentItem:{
        text:"",
        key:""
      }
    }

    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(e){
    console.log(e.target.value)
  }

  addItem(e){
    console.log("add item in list")
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
        </header>
      </div>
    );
  }
}


export default App;
