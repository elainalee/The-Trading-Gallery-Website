import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../buttons/Button';
import { IconButton } from '../../buttons/IconButton/IconButton';

export default function UserButton() {
    const { currentUser } = useAuth();
    const history = useHistory();

    function goToLogIn() {
        history.push('/logIn');
    }

    function goToUpdateProfile() {
        history.push('/update-profile');
    }

    return (
        <div className="user-icon">
            {currentUser
                ? <IconButton buttonIcon="user-profile-btn" buttonSize="icon-btn--navbar" onClick={goToUpdateProfile} />
                : <Button className="nav-top-menu-item-name" buttonStyle="btn--outline" buttonSize="btn--navbar" marginLeft="1rem" color="black" onClick={goToLogIn}>Sign In</Button>}
        </div>
    );
}
