import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './app.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Home from './pages/__Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { pagelink } from './PageLink';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Provider store={store}>
          <Route exact path={"/"} component={Home} />  
          <Route exact path={`/${pagelink.home}/:catId`} component={Home} />
          <Route exact path={`/${pagelink.home_}/:catId`} component={Home} />
          <Route exact path={`/${pagelink.about}`} component={About} />
          <Route exact path={`/${pagelink.contact}`} component={Contact} />
          </Provider>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;