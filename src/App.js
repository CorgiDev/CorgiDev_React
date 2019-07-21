import React, { Component } from 'react';
import Home from './views/Home';
import Resume from './views/Resume';
import Contact from './views/Contact';
import Blog from './views/Blog';
import {BrowserRouter, Route} from 'react-router-dom';

//Normalize css used to reset everything to a more consistent look across different browsers.
import './normalize.css';

//My css files
import './foundation-icons/foundation-icons.css';
import './App.css';
import './responsive.css';
//import logo from './logo.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/blog' render={() => (
            <div className="App">
              <Blog />
            </div>
          )}/>
          <Route exact={true} path='/resume' render={() => (
            <div className="App">
              <Resume />
            </div>
          )}/>
          <Route exact={true} path='/contact' render={() => (
            <div className="App">
              <Contact />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
