import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={LoginPage} exact={true}></Route>
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} exact={true}></PrivateRoute>
        <PrivateRoute path='/create' component={AddExpensePage} exact={true}></PrivateRoute>
        <PrivateRoute path='/edit/:id' component={EditExpensePage} exact={true}></PrivateRoute>
        <Route path='/help' component={HelpPage} exact={true}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
