import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom';

import {Homepage} from './pages/HomePage/homepage.component.jsx';
import ShopPage from './pages/ShopPage/ShopPage.component.jsx'
import Header from './components/Header/header.component.jsx'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component ={Homepage}/>
        <Route path='/shop' component ={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
