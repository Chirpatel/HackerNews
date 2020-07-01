import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './component/Home'; 
import './App.css'; 
  
class App extends Component { 
  render() { 
    return ( 
       <Router> 
           <div className="App"> 
            <div className="App-header"> 
                <span>HackNews</span> 
                <Link to="/">Home</Link> 
            </div> 
            <Switch> 
              <Route exact path='/' render={()=><Home/>}></Route> 
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 