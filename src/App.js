import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';

const hats=()=>
{
  return <div>
    <h1>Hats Page</h1>        
  </div>
}
function App() {
  return (
    <div >
    <Route exact path='/' component={HomePage}/>
    <Route path='/hats' component={hats}/>
    </div>
  );
}

export default App;
