import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ProfileRoute, SellerProfileRoute } from '../utils/routes';

export default function EnsureLogOutRoute({ component: Component, ...rest }) {

    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    const currentSeller = state.seller.seller;

    return (
        <Route
          {...rest}
          render={(props) => ((!currentUser && !currentSeller)
                ? <Component {...props} />
                : <Redirect to={currentUser ? ProfileRoute : SellerProfileRoute}/>)}
        />
    );
}
