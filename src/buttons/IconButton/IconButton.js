import React from 'react';
import './IconButton.css';

const ICONS = {
    'failed-loading-btn': 'fas fa-spinner',
    'user-profile-btn': 'fas fa-user',
    'carts-btn': 'fas fa-shopping-cart',
    'search-btn': 'fas fa-search',
    'menu-btn': 'fas fa-bars',
    'cancel-btn': 'fas fa-times',
};

const SIZES = [
    'icon-btn--small',
    'icon-btn--medium',
    'icon-btn--large',
    'icon-btn--navbar',
];

export const IconButton = ({
    children,
    type,
    onClick,
    buttonIcon,
    buttonSize,
    color,
}) => {
    if (buttonIcon === 'hidden') {
        return (<></>);
    }

    const thisIconName = buttonIcon in ICONS ? buttonIcon : 'failed-loading-btn';

    const thisIconNameClass = ICONS[thisIconName];

    const thisButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

    return (
        <i className={`icon-btn ${thisIconNameClass} ${thisIconName} ${thisButtonSize} `} onClick={onClick} type={type} style={({ color })}>
            {children}
        </i>
    );
};
