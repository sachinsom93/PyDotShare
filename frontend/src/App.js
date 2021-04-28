import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Footer from './Components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from './store/actions/auth';
import Alert from './Components/Alert/Alert';

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  
  return (
    <BrowserRouter >
      <Navbar />
      <Alert />
      <Switch >
        <Route exact path='/auth'>
          {
            (state.auth && state.auth.user) ? (
              <Profile />
            ) : (
              <LoginPage />
            )
          }
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/profile'>
          {
            (state.auth && state.auth.user) ? (
              <Profile />
            ) : (
              <LoginPage />
            )
          }
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )  
}

export default App;