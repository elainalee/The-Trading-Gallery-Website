import React from 'react';
import './CustomButton.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
    'btn--link',
];

const SIZES = [
    'btn--medium',
    'btn--large',
    'btn--navbar',
    'btn--signin',
];

const BUTTON_DETAILS = [
    'login',
    'signup',
    'resetpw',
    'userprofile',
    'updateprofile',
];

const COLORS = [
    'black',
];

export const CustomButton = ({
    children,
    type,
    disabled,
    onClick,
    buttonStyle,
    buttonSize,
    buttonDetail,
    color,
    marginLeft,
    marginTop,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    if (checkButtonStyle === 'btn--link') {
        return (
            <button
              className={checkButtonStyle}
              onClick={onClick}
              disabled={disabled}
              type={type}
              style={({ marginTop, marginLeft })}
            >
                {children}
            </button>
        );
    }

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonDetailedSize = BUTTON_DETAILS.includes(buttonDetail) ? buttonDetail : '';

    const checkDisabled = disabled ? 'disabled' : '';

    const thisColorName = COLORS.includes(color) ? color : COLORS[0];

    return (
        <button
          className={`btn--primary ${checkButtonStyle} ${checkButtonSize} ${checkButtonDetailedSize} ${thisColorName} ${checkDisabled}`}
          onClick={onClick}
          disabled={disabled}
          type={type}
          style={({ marginTop, marginLeft })}
        >
            {children}
        </button>
    );
};

export default CustomButton;