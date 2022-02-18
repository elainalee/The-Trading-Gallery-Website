import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import { LOGIN_AS_USER_FOR_ACCESS } from '../utils/constants';
import { LogInRoute } from '../utils/routes';

export default function LogInFirstRoute({ component: Component, ...rest }) {
    const state = useSelector((state) => state);

    return (
        <Route
          exact
          {...rest}
          render={(props) => (
            (state.auth.loggedInUser === false)
                ? (
                <div className="marginTop marginHorizontal cartsPage">
                    <div className="freeShipping">
                        Please <Link to={LogInRoute} className="links underline">log in</Link> first to use carts.
                    </div>
                </div>)
                : (state.auth.loggedInSeller)
                    ? (
                        <div className="marginTop marginHorizontal cartsPage">
                            <div className="freeShipping">
                                <text>{LOGIN_AS_USER_FOR_ACCESS}</text>
                            </div>
                        </div>
                    )
                    : (<Component {...props} />)
              
            )}
        />
    );
}