import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogInRoute, ProfileRoute } from '../../utils/routes';
import { CustomButton } from './CustomButton';
import { IconButton } from './IconButton';

export default function UserButton() {
    const state = useSelector((state) => state);
    const currentUser = state.user.user;

    const history = useHistory();

    function goToLogIn() {
        history.push(LogInRoute);
    }

    function goToUserProfile() {
        history.push(ProfileRoute);
    }

    return (
        <div className="user-icon">
            {currentUser
                ? <IconButton buttonIcon="user-profile-btn" buttonSize="navbar" onClick={goToUserProfile} />
                : <CustomButton className="nav-top-menu-item-name" buttonStyle="outline" buttonSize="navbar" marginLeft="1rem" color="black" onClick={goToLogIn}>Sign In</CustomButton>}
        </div>
    );
}
