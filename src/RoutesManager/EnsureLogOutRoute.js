import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ProfileRoute } from '../utils/routes';

export default function EnsureLogInRoute({ component: Component, ...rest }) {

    const state = useSelector((state) => state);
    const currentUser = state.user.user;

    return (
        <Route
          {...rest}
          render={(props) => (!currentUser
                ? <Component {...props} />
                : <Redirect to={ProfileRoute}/>)}
        />
    );
}
