import React, { Component } from 'react';
import Todos from './Todos.jsx';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Eat Maggie'},
      {id: 2, content: 'Play Valorent'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });

    // key and value are same so below it's 'value' and not 'key: value'
    this.setState({
      todos
    })
  }
  render() {
    return(
      <div className="todo-App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
}
}

export default App;
