import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler} from 'react-router';
import tree from 'stores/store';
import {root} from 'baobab-react/decorators';
import NotFound from 'components/pages/notFound';
import TestPage from 'components/pages/testPage';

@root(tree)
class WithLayout extends React.Component {
  render() {
    return (
      <RouteHandler tree = {tree}/>
    );
  }
};

//routes for different pages for the ease of browser's address bar manipulation
const AppRoutes = (
  <Route handler = {WithLayout} >
    <DefaultRoute name = 'testPage' handler = {TestPage}/>
    <NotFoundRoute handler = {NotFound}/>
  </Route>
);

export {AppRoutes as default};