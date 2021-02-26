import React from 'react';
import './App.css';
import {Homepage} from './pages/HomePage/homepage.component.jsx';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage.component.jsx'


function App() {
  return (
    <div>
      <Route exact path='/' component ={Homepage}/>
      <Route path='/shop' component ={ShopPage} />
    </div>
  );
}

export default App;
