import { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  id = 4;
  state = {
    ninjas: [
      { name: "Vinit", age: 31, belt: "Black", id: 1 },
      { name: "Vinit2", age: 21, belt: "Brown", id: 2 },
      { name: "Vinit3", age: 35, belt: "Blue", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = this.id;
    this.id++;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome! :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
