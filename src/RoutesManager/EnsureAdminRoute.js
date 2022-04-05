import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { LogInRoute } from '../utils/routes';

import { getStatus } from '../Axios/asyncStorage';

export default function EnsureSellerRoute({ component: Component, redirectTo, ...rest }) {
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
            (status === "admin")
                ? redirectTo
                    ? <Redirect to={redirectTo} />
                    : <Component {...props} />
                : (status === "seller" || status === "user" || status === null)
                    ? <div className="vertical-md horizontal-sm cartsPage">
                            <div className="freeShipping">
                                Sorry, not permitted. <Link to={LogInRoute} className="emphasis-links">log in as seller</Link>.
                            </div>
                        </div>
                    : <div></div>
            )}
        />
    );
}