//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Notification from 'react-notify-toast';
import 'react-toastify/dist/ReactToastify.css';

import Landing from './components/Landing.js';
import Confirm from './components/Confirm.js';
import Spinner from './components/Spinner.js';
//import Footer from './components/Footer.js';

import { API_URL } from './config';
import { Spinner } from 'react-bootstrap';

class App extends React.Component{
  state = {loading: true};
  //wake server, keep it in-check
  componentDidMount = () => {
    fetch(`$(API_URL)/wake-up`)
    .then(res=>res.json())
    .then(()=>{
      this.setState({loading: false});
    }).catch(error=>console.log(error));
  }
  render(){
    const content = () => {
      if(this.state.loading){
        return <Spinner size="8x" spinning="spinning" />
      }
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/confirm/:id' component={Confirm} />
            <Route exact path='/' component={Landing} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
      )
    }
    return(
      <div className="container fadein">
        <Notification/>
        <main>
          {content()}
        </main>
      </div>
    );
  }
}

export default App;
