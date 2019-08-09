import React, { Component } from 'react';
// import { Button } from "semantic-ui-react";
// import {connect} from "react-redux";
import Counter from "./Counter";

class App extends Component{
  render(){
    return (
      <div className="App">
        <Counter count="0" />
      </div>
    );
  }
};

export default App;
