import { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: "Vinit", age: 21, belt: "Black", id: 1 },
      { name: "Vinit2", age: 21, belt: "Brown", id: 2 },
      { name: "Vinit3", age: 21, belt: "Blue", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome! :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
