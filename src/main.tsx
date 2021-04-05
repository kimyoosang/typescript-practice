import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SearchPage from './Pages/SearchPage'
import Header from './components/Header';

const Main:React.FC = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/search'>
        <SearchPage/>
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Main;