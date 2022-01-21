import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import BlogOne from '../BootstrapFive/Blog01/BlogOne';
import Copyright from '../BootstrapFive/Copyright/Copyright';



const Router = () => {

  return (
    <BrowserRouter basename={`/react/b4blog-one`}>
      <Switch>
        <BlogOne />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )

}

export default Router
