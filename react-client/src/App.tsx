import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/">
                <Homepage/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
