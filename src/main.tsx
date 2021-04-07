import * as React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import SearchPage from './Pages/SearchPage'
import RegisterPage from './Pages/RegisterPage';
import Mypage from './Pages/Mypage';
import Header from './components/Header';
import { RouterProps, withRouter } from 'react-router';


const Main:React.FC<RouterProps> = ({ history }) => {

  return (
    <Router history={history}>
      <Header/>
      <Switch>
        <Route path='/main/register'>
          <RegisterPage/>
        </Route>
        <Route path='/mypage'>
          <Mypage/>
        </Route>
        <Route path='/main/search'>
        <SearchPage/>
        </Route>
        </Switch>
    </Router>
  );
}

export default withRouter(Main);