//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//require components
import Home from './components/Home.js';

class App extends React.Component{
  render(){
    return(    
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
