import React from 'react';
import {Navbar} from './navbar';
import {Tracks} from './tracks';
import Lyrics from './lyrics';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

export class App extends React.Component {

render() {
    return (
      <BrowserRouter>
      <div className='App'>
      <Navbar />
      <Switch>
      <Route  exact path='/' component={Tracks} />
      <Route  exact path='/lyrics/track/:id' component={Lyrics} />
      </Switch>
      </div>
      </BrowserRouter>
 
    
    );
  }
};

