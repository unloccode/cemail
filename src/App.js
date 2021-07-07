//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//require components
import Home from './components/Home.js';
import Confirm from './components/Confirm.js';

class App extends React.Component{
  render(){
    return(    
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/confirm/:id' component={Confirm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
