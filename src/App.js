import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Connexion from './components/Connexion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Connexion' exact component={Connexion} />
        </Switch>
      </Router>
    </>
  );
}

export default App;