import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HatsPage from './pages/category/hats.component';
import JacketsPage from './pages/category/jackets.component';
import SneakersPage from './pages/category/sneakers.component';
import WomensPage from './pages/category/womens.component';
import MensPage from './pages/category/mens.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/crwn-clothing' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/shop' element={<ShopPage/>}>
          </Route>
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path='/signin' element={this.props.currentUser ? <Navigate replace to='/' /> : <SignInAndSignUpPage />}/>
          <Route path='hats' element={<HatsPage/>} />
          <Route path='jackets' element={<JacketsPage/>} />
          <Route path='sneakers' element={<SneakersPage/>} />
          <Route path='womens' element={<WomensPage/>} />
          <Route path='mens' element={<MensPage/>} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
