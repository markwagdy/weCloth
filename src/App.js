import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInSignUp from './Pages/Sign-in-and-sign-up/sign-in-and-sign -up.componen';
import {auth} from './Firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      currentUser: null 
    };
  }
  unsubscribeFromAuth =null;
  componentDidMount()
  {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }
  componentWillUnmount()
  {

    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
    {console.log(this.currentUser)}
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInSignUp}/>
    </Switch>
    </div>
  );
  }
}

export default App;
