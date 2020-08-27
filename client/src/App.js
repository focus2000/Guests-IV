import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import GuestState from './context/guestContext/GuestState';
import AuthState from './context/authContext/AuthState';
import PrivateRoute from './components/pages/routes/privateRoute';
import setToken from './utils/setToken';

if(localStorage.token) {
  setToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
    <GuestState>
      <Router>
    <div>
      <Navbar/>
    <Switch>
      <PrivateRoute exact path = '/' component ={Home}/>
      <Route path = '/register' component = {Register}/>
      <Route path = '/login' component = {Login}/>
    </Switch>
    </div>
    </Router>
    </GuestState>
    </AuthState>
  );
  
}

export default App;
