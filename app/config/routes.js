var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/HeaderContainer');
var HomeContainer = require('../containers/HomeContainer');
var GetReposConatiner = require('../containers/getReposContainer');
var EnvironmentContainer = require('../containers/EnvironmentContainer');

var Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/repos' component={GetReposConatiner} />
      <Route path='/environments' component={EnvironmentContainer} />
    </Route>
  </Router>
);

module.exports = Routes;
