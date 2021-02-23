import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage.component.jsx';
import {Route,Switch} from 'react-router-dom';

const HatsPage = (props) => {
  return <div>
    <h1>HATS PAGE</h1>
  </div>
}
function App() {
  return (
    <div>
      <Route exact path='/' component ={Homepage}/>
      <Route path='/hats' component ={HatsPage} />
    </div>
  );
}

export default App;
