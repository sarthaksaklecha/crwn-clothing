import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom';

import {Homepage} from './pages/HomePage/homepage.component.jsx';
import ShopPage from './pages/ShopPage/ShopPage.component.jsx'
import Header from './components/Header/header.component.jsx'
import SigninAndSignupPage from './pages/sign-in_and_sign-out/sign-in_sign-out.component.jsx'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //userAuth is an object of the details of the user who logged in, we will add this information on the database.
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          },()=>console.log(this.state))
        })
      }else {
        this.setState({
          currentUser:userAuth
        })
      }
  })
}
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className='window'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component ={Homepage}/>
          <Route path='/shop' component ={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
