import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch >
        <Route exact path='/auth'>
          <LoginPage />
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )  
}

export default App;