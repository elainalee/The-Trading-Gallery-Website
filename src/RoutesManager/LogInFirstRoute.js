import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import { LOGIN_AS_USER_FOR_ACCESS } from '../utils/constants';
import { LogInRoute } from '../utils/routes';

export default function LogInFirstRoute({ component: Component, redirectTo, ...rest }) {
    const state = useSelector((state) => state);

    // console.log("redirectTo ", redirectTo);
    
    return (
        <Route
          exact
          {...rest}
          render={(props) => (
            (state.auth.loggedInUser === false)
                ? (<div className="marginTop paddingHorizontalSm cartsPage">
                    <div className="freeShipping">
                        Please <Link to={LogInRoute} className="emphasis-links">log in</Link> to review this section.
                    </div>
                </div>)
                : (state.auth.loggedInSeller)
                    ? (
                        <div className="marginTop paddingHorizontal cartsPage">
                            <div className="freeShipping">
                                <text>{LOGIN_AS_USER_FOR_ACCESS}</text>
                            </div>
                        </div>
                    )
                    : redirectTo
                        ? <Redirect to={redirectTo} />
                        : (<Component {...props} />)
              
            )}
        />
    );
}