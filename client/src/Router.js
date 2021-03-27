import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie'
import Login from './Containers/Login';
import Register from './Components/Register';
import Landing from './Components/Landing';
import MessageView from './Components/Chat/MessageView';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/message" component={MessageView} />
            <Route path="/login" component={Login} />
            <Route path = "/register" component={Register}/>
        </Switch>
    );
};

export default Router; 