import React, { useEffect, useState } from 'react';
import { getStatus } from '../../Axios/asyncStorage';
import { LogInRoute, SellerProfileRoute, MyAccountRoute } from '../../utils/routes';
import { IconButton } from './IconButton';

export default function UserButton(props) {
    const [status, setStatus] = useState(undefined);

    useEffect(async () => {
        let curStatus = await getStatus();
        setStatus(curStatus);
    }, []);

    function goToLogIn() {
        window.location.href = LogInRoute;
    }

    function goToUserProfile() {
        window.location.href = MyAccountRoute;
    }

    function goToSellerProfile() {
        window.location.href = SellerProfileRoute;
    }

    return (
        <IconButton buttonIcon="user-profile-btn" buttonSize="navbar" color="black" 
            onClick={status === "user" ? goToUserProfile : status === "seller" ? goToSellerProfile : status === null ? goToLogIn : () => {}} />
);
}
