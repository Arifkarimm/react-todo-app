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

  }

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
