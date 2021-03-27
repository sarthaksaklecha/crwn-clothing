import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom';

import {Homepage} from './pages/HomePage/homepage.component.jsx';
import ShopPage from './pages/ShopPage/ShopPage.component.jsx'
import Header from './components/Header/header.component.jsx'
import SigninAndSignupPage from './pages/sign-in_and_sign-out/sign-in_sign-out.component.jsx'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user.actions'


class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //userAuth is an object of the details of the user who logged in, we will add this information on the database.
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }
          )
        })
      }else {
        this.props.setCurrentUser(userAuth)
      }
  })
}
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className='window'>
        <Header />
        <Switch>
          <Route exact path='/' component ={Homepage}/>
          <Route path='/shop' component ={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
