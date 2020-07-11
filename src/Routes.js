import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Services from './components/services/';
import About from './components/about/';
import Contact from './components/contact/';
import NotFound from './components/404';

export default (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route
                path='/services'
                render={() => (
                <Services {...props} />
                )}
            />
            <Route
                path='/about'
                render={() => (
                    <About {...props} />
                )}
            />
            <Route
                path='/contact'
                render={() => (
                    <Contact {...props} />
                )}
            />
            <Route component={NotFound} />
        </Switch>
    )
}
