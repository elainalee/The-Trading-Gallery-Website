import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ListingsPageRoute, LogInRoute, ProfileRoute } from '../../utils/routes';
import { CustomButton } from './CustomButton';
import { IconButton } from './IconButton';

export default function UserButton() {
    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    const currentSeller = state.seller.seller;

    const loggedIn = state.auth.loggedIn;
    console.log("loggedIn? " , loggedIn);

    const history = useHistory();

    function goToLogIn() {
        history.push(LogInRoute);
    }

    function goToUserProfile() {
        history.push(ProfileRoute);
    }

    function goToSellerProfile() {
        history.push(ListingsPageRoute);
    }

    return (
        <div className="user-icon">
            {loggedIn
                ? <IconButton buttonIcon="user-profile-btn" buttonSize="navbar" onClick={currentUser ? goToUserProfile : goToSellerProfile} />
                : <CustomButton className="nav-top-menu-item-name" buttonStyle="outline" buttonDetail="navbar" marginLeft="1rem" onClick={goToLogIn}>Sign In</CustomButton>}
        </div>
    );
}
