import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SellerPanelPageRoute, LogInRoute, ProfileRoute, SellerProfileRoute, MyAccountRoute } from '../../utils/routes';
import { IconButton } from './IconButton';

export default function UserButton(props) {
    const state = useSelector((state) => state);
    const currentUser = state.user.user;

    const loggedIn = state.auth.loggedInUser;

    const history = useHistory();

    function goToLogIn() {
        history.push(LogInRoute);
    }

    function goToUserProfile() {
        props.setMenuClicked(false);
        window.location.href = MyAccountRoute;
    }

    function goToSellerProfile() {
        props.setMenuClicked(false);
        history.push(SellerProfileRoute);
    }

    return (
        <div className={props.menuClicked ? "" : " hide"}>
            {loggedIn
                ? <IconButton buttonIcon="user-profile-btn" buttonSize="navbar" onClick={currentUser ? goToUserProfile : goToSellerProfile} />
                : <IconButton buttonIcon="user-profile-btn" buttonSize="navbar" onClick={goToLogIn} />
                // : <CustomButton buttonStyle="outline" buttonDetail="navbar-size" marginLeft="1rem" onClick={goToLogIn}>Sign In</CustomButton>
            }
        </div>
    );
}
