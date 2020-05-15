import React, { Component } from "react";
import AddSmurf from './AddSmurf'
import ShowSmurfs from './ShowSmurfs'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* add a smurf via an add smurf component*/}
        <AddSmurf />
        {/* show a list of smurfs and their properties */}
        <ShowSmurfs />
        {/* STRETCH EDIT SMURFS */}
      </div>
    );
  }
}

export default App;
