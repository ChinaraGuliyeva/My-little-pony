import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';


class App extends Component {
  render(){
  return (
    <div>
      <Route path="/" exact component={Homepage}/>
    </div>
  )
  }
}

export default App;
