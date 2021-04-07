import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../src/main';
import LandingPage from './Pages/LandingPage';

const App:React.FC = () => {
  return (
  <>
    <Switch>
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route path='/main'>
        <Main/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
