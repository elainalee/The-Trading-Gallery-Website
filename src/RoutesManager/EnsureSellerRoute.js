import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../reducers/userReducer';
import { LogInRoute } from '../utils/routes';

export default function EnsureSellerRoute({ component: Component, ...rest }) {
    const state = useSelector((state) => state);
    const currentSeller = state.seller.seller;
    

    return (
        <Route
          {...rest}
          render={(props) => (currentSeller
                ? <Component {...props} />
                : <Redirect to={LogInRoute} />)}
        />
    );
}
