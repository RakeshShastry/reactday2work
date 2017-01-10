import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Random from './components/Random';
import Box from './components/boxes/Boxes';
import Conversion from './components/Conversion';
import Movies from './components/movies/Movies';
import Faq from './components/Faq';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="random" component={Random} />
       <Route path="conversion" component={Conversion} />
       <Route path="movies/movies" component={Movies} />
      <Route path="boxes/box" component={Box} />
    </Route>
  </Router>,
  document.getElementById('root')
);
