import React, { Component } from "react";

class Ninjas extends Component {
<<<<<<< HEAD
  render() {
    // console.log(this.props);
    const { name, age, belt } = this.props;
    return (
      <div className="ninja">
        <div>Name: {name} </div>
        <div>Age: {age} </div>
        <div>Belt: {belt} </div>
      </div>
    );
  }
=======
    render() {
        // console.log(this.props);
        const {name, age, belt} = this.props;
        return (
            <div className="ninja">
                <div>Name: {name} </div>
                <div>Age: {age} </div>
                <div>Belt: {belt} </div>
            </div>
        );
    }
>>>>>>> 05ba0d25b62226bf851b7309b93543161dd0cd5e
}

export default Ninjas;