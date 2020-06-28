import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInSignUp from './Pages/Sign-in-and-sign-up/sign-in-and-sign -up.componen';
function App() {
  return (
    <div >
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInSignUp}/>
    </Switch>
    </div>
  );
}

export default App;
