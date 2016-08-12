import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941


// Layout


// UI
import LoginForm from 'ui/login';

const Site = (
 
    <Router history={hashHistory}>
        <Route path="/" component={LoginForm} />
    </Router>
);

render(Site, document.getElementById('app'));