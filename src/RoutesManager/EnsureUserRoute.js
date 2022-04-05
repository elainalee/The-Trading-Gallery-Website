import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { LOGIN_AS_USER_FOR_ACCESS } from '../utils/constants';
import { LogInRoute } from '../utils/routes';

import { getStatus } from '../Axios/asyncStorage';

export default function EnsureUserRoute({ component: Component, redirectTo, ...rest }) {
    const [status, setStatus] = useState(undefined);

    useEffect(async () => {
        let curStatus = await getStatus();
        setStatus(curStatus);
    }, []);


    return (
        <Route
          exact
          {...rest}
          render={(props) => (
            status === "user"
                ? redirectTo
                    ? <Redirect to={redirectTo} />
                    : <Component {...props} />
                : status === "seller"
                    ? <div className="vertical-md horizontal-md cartsPage">
                            <div className="freeShipping">
                                <text>{LOGIN_AS_USER_FOR_ACCESS}</text>
                            </div>
                        </div>
                    : status === null
                        ? <div className="vertical-md horizontal-sm cartsPage">
                            <div className="freeShipping">
                                Please <Link to={LogInRoute} className="emphasis-links">log in</Link> to review this section.
                            </div>
                            </div>
                        : <div></div>
            )}
        />
    );
}