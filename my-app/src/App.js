import { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome! :)</p>
        <Ninjas name="Vinit 2" age="22" belt="Black" />
      </div>
    );
  }
}

export default App;
