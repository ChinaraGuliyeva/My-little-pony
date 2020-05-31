import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListOfPonies from './ListOfPonies';


class App extends Component {
  render(){
  return (
    <div>
      <Route path="/" exact component={Homepage}/>
      <Route path="/list/:id" exact component={ListOfPonies} />
    </div>
  )
  }
}

export default App;
