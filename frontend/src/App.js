import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter >
      <h1>PyDotShare</h1>
      <Route exact path='/auth'>
        <LoginPage />
      </Route>
    </BrowserRouter>
  )  
}

export default App;