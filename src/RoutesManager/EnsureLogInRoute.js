import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../reducers/userReducer';
import { LogInRoute } from '../utils/routes';

export default function EnsureLogInRoute({ component: Component, ...rest }) {
    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    

    return (
        <Route
          {...rest}
          render={(props) => (currentUser
                ? <Component {...props} />
                : <Redirect to={LogInRoute} />)}
        />
    );
}
