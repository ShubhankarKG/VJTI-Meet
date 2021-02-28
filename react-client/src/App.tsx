import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
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
