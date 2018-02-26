import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AppEntry from './containers/AppEntry';
import About from './containers/About';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={AppEntry} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}