import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from './pages/Login'



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <Switch>
            <Route exact path="/First-contact-with-ReactJS">
                <Home/>
            </Route>
            
            <Route exact path="/First-contact-with-ReactJS/login">
                <Login/>
            </Route>
        </Switch>
    )
}