import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MyAccountRoute, SellerProfileRoute } from '../utils/routes';

import { getStatus } from '../Axios/asyncStorage';

export default function EnsureLogOutRoute({ component: Component, ...rest }) {
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
                ? <Redirect to={MyAccountRoute}/>
                : status === "seller"
                    ? <Redirect to={SellerProfileRoute}/>
                    : status === null
                        ? <Component {...props} />
                        : <div></div>
            )}
        />
    );
}
