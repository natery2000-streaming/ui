import React, { Component} from "react";
import {hot} from "react-hot-loader";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {items: []};
  }  

  render(){
    return(
      <div>
        asdf
      </div>
    );
  }
}

export default hot(module)(App);