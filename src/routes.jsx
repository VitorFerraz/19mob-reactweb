import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './pages/Search/index'
const Routes = () => (
    <Switch>
        <Route exact path="/" component= { Search } ></Route>
        <Route component= { ()=> (<div>Not found</div>) } ></Route>

    </Switch>
);
 export default Routes;