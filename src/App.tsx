import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../src/main';

const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
