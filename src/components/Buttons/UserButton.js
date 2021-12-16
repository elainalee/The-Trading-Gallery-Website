import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { CustomButton } from './CustomButton/CustomButton';
import { IconButton } from './IconButton/IconButton';

export default function UserButton() {
    // const { currentUser } = useAuth();
    const state = useSelector((state) => state);
    const currentUser = state.user.user;

    const history = useHistory();

    function goToLogIn() {
        history.push('/logIn');
    }

    function goToUserProfile() {
        history.push('/profile-page');
    }

    return (
        <div className="user-icon">
            {currentUser
                ? <IconButton buttonIcon="user-profile-btn" buttonSize="icon-btn--navbar" onClick={goToUserProfile} />
                : <CustomButton className="nav-top-menu-item-name" buttonStyle="btn--outline" buttonSize="btn--navbar" marginLeft="1rem" color="black" onClick={goToLogIn}>Sign In</CustomButton>}
        </div>
    );
}
