import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import { getUser } from '../reducers/userReducer';
import { LOGIN_AS_USER_FOR_ACCESS } from '../utils/constants';
import { LogInRoute } from '../utils/routes';

export default function EnsureUserRoute({ component: Component, ...rest }) {
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
