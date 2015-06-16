import 'styles/app.sass';
import React from 'react';
import Router from 'react-router';
import AppRoutes from 'app/appRoutes';

window.React = React;

Router
  .create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
  })
  .run(Handler => {
    React.render(<Handler/>,
        document.getElementById('react-mount')
    );
  });
