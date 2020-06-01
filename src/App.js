import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListOfPonies from './ListOfPonies';
import PonyDetails from './PonyDetails';


class App extends Component {
  render(){
  return (
    <div>
      <Route path="/" exact component={Homepage}/>
      <Route path="/list/:id" exact component={ListOfPonies} />
      <Route path="/pony/:id" exact component={PonyDetails} />
    </div>
  )
  }
}

export default App;
