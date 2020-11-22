import { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    id: 3,
    ninjas: [
      { name: "Vinit", age: 31, belt: "Black", id: 1 },
      { name: "Vinit2", age: 41, belt: "Brown", id: 2 },
      { name: "Vinit3", age: 35, belt: "Blue", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = this.state.id + 1;
    let newNinjas = [...this.state.ninjas, ninja];
    this.setState({
      id: this.state.id + 1,
      ninjas: newNinjas
    }, () => {
        console.log(this.state.ninjas);
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    console.log(id);
    this.setState({
      ninjas: ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome! :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
