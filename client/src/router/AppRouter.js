import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../components/Landing';
import AuthenticatedRoute from '../router/AuthenticatedRoute';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <AuthenticatedRoute path="/survey" component={SurveyNew} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
