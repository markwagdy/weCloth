import React, { useRef } from 'react';
import {Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInSignUp from './Pages/Sign-in-and-sign-up/sign-in-and-sign -up.componen';
import {auth, createUserProfileDocument} from './Firebase/firebase.utils';

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
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
      
      const userRef=await  createUserProfileDocument(userAuth);
  
    userRef.onSnapshot(sanpShot =>
      {
        this.setState(
          {
            currentUser : {
              id:sanpShot.id,
              ...sanpShot.data()

            }
          }
        );
        console.log(this.state);
      });
      
      }
      else{
        this.setState({currentUser:userAuth});
      }
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
