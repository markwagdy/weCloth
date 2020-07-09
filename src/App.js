import React from 'react';
import {Route ,Switch} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInSignUp from './Pages/Sign-in-and-sign-up/sign-in-and-sign -up.componen';
import {auth, createUserProfileDocument} from './Firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/user/user.actions';
class App extends React.Component {
  
  
  unsubscribeFromAuth =null;
  componentDidMount()
  {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
      
      const userRef=await  createUserProfileDocument(userAuth);
  
    userRef.onSnapshot(snapShot => {
        setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
         });
    });
      
      }
      else{
        setCurrentUser(userAuth);
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
    
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop' component={ShopPage}/>
    <Route path='/signin' component={SignInSignUp}/>
    </Switch>
    </div>
  );
  }
}
const mapDispatchToProps =dispatch=>
({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);
