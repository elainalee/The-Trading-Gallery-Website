import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { MyAccountRoute, SellerProfileRoute } from '../utils/routes';

export default function EnsureLogOutRoute({ component: Component, ...rest }) {

    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    const currentSeller = state.seller.seller;

    return (
        <Route
          {...rest}
          render={(props) => ((!currentUser && !currentSeller)
                ? <Component {...props} />
                : <Redirect to={currentUser ? MyAccountRoute : SellerProfileRoute}/>)}
        />
    );
}
